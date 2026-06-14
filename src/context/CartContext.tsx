'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface CartItem {
  id: string;
  serviceSlug: string;
  serviceName: string;
  itemName: string;
  variantName: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

type AddCartItem = Omit<CartItem, 'quantity'>;

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: AddCartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  hasItem: (id: string) => boolean;
}

const STORAGE_KEY = 'hygiguard-cart';
const CartContext = createContext<CartContextValue | undefined>(undefined);

function readCartCookie() {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${STORAGE_KEY}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.split('=')[1]);
}

function writeCartCookie(nextItems: CartItem[]) {
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(
    JSON.stringify(nextItems)
  )}; path=/; max-age=2592000; SameSite=Lax`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const storedCart =
        window.localStorage.getItem(STORAGE_KEY) ?? readCartCookie();
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];
        setItems(parsedCart);
      }
    } catch {
      setItems([]);
    }
  }, []);

  const saveCart = useCallback((nextItems: CartItem[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextItems));
    } catch {
      // Cart still works in-memory if browser storage is unavailable.
    }

    try {
      writeCartCookie(nextItems);
    } catch {
      // Cart still works in-memory if cookies are unavailable.
    }
  }, []);

  const addItem = useCallback((item: AddCartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        const nextItems = currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

        saveCart(nextItems);
        return nextItems;
      }

      const nextItems = [...currentItems, { ...item, quantity: 1 }];
      saveCart(nextItems);
      return nextItems;
    });
  }, [saveCart]);

  const removeItem = useCallback((id: string) => {
    setItems((currentItems) => {
      const nextItems = currentItems.filter((cartItem) => cartItem.id !== id);
      saveCart(nextItems);
      return nextItems;
    });
  }, [saveCart]);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setItems((currentItems) => {
      const nextItems = currentItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      );

      saveCart(nextItems);
      return nextItems;
    });
  }, [removeItem, saveCart]);

  const clearCart = useCallback(() => {
    setItems([]);
    saveCart([]);
  }, [saveCart]);

  const hasItem = useCallback(
    (id: string) => items.some((cartItem) => cartItem.id === id),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      hasItem,
    }),
    [addItem, clearCart, hasItem, items, removeItem, updateQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
