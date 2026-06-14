'use client';

import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui';
import { CartItem, useCart } from '@/context/CartContext';

type AddToCartButtonProps = {
  item: Omit<CartItem, 'quantity'>;
};

export function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addItem, hasItem } = useCart();
  const [wasAdded, setWasAdded] = useState(false);
  const isInCart = hasItem(item.id);

  const handleAddToCart = () => {
    addItem(item);
    setWasAdded(true);
    window.setTimeout(() => setWasAdded(false), 1400);
  };

  return (
    <Button
      type="button"
      variant={isInCart || wasAdded ? 'secondary' : 'outline'}
      size="sm"
      onClick={handleAddToCart}
      className="w-full sm:w-auto min-w-32"
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
