'use client';

import React, { useState } from 'react';
import { Check, ShoppingCart, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui';
import { CartItem, useCart } from '@/context/CartContext';

type AddToCartButtonProps = {
  item: Omit<CartItem, 'quantity'>;
  quantity?: number;
  mode?: 'countable' | 'bulk';
  onAdded?: () => void;
  disabled?: boolean;
};

export function AddToCartButton({ item, quantity = 1, mode = 'countable', onAdded, disabled }: AddToCartButtonProps) {
  const { items, addItem, updateQuantity } = useCart();
  const [wasAdded, setWasAdded] = useState(false);
  
  const cartItem = items.find((i) => i.id === item.id);
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    addItem({ ...item, quantity });
    setWasAdded(true);
    if (onAdded) onAdded();
    window.setTimeout(() => setWasAdded(false), 1400);
  };

  if (mode === 'countable' && cartItem) {
    return (
      <div className="flex items-center border border-primary rounded-lg overflow-hidden h-10 w-full sm:w-auto flex-shrink-0">
        <button
          onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
          className="px-4 hover:bg-primary/10 h-full transition-colors flex items-center justify-center text-primary"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-10 text-center font-semibold text-primary text-sm">
          {cartItem.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
          className="px-4 hover:bg-primary/10 h-full transition-colors flex items-center justify-center text-primary"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <Button
      type="button"
      variant={isInCart || wasAdded ? 'secondary' : 'outline'}
      size="sm"
      onClick={handleAddToCart}
      disabled={disabled}
      className="w-full sm:w-auto min-w-32 h-10 flex-shrink-0"
    >
      {wasAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added
        </>
      ) : (
        <>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </Button>
  );
}
