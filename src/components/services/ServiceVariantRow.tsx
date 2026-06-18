'use client';

import React, { useState } from 'react';
import { AddToCartButton } from '@/components/cart/AddToCartButton';
import { MessageCircle, Minus, Plus } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';
import { useCart } from '@/context/CartContext';

interface ServiceVariantRowProps {
  service: any;
  item: any;
  variant: any;
}

export function ServiceVariantRow({
  service,
  item,
  variant,
}: ServiceVariantRowProps) {
  const { items } = useCart();
  const cartItemId = `${service.slug}:${item.name}:${variant.name}`;
  const cartItem = items.find((i) => i.id === cartItemId);

  const isBulk = variant.unit === 'Sq. Ft.' || (variant.minQty && variant.minQty > 1);

  const [quantity, setQuantity] = useState<number | ''>(isBulk ? '' : (variant.minQty || 1));

  const discount = Math.round(
    ((variant.originalPrice - variant.price) / variant.originalPrice) * 100
  );

  const handleDecrease = () => {
    if (typeof quantity === 'number' && quantity > (variant.minQty || 1)) {
      setQuantity((q) => (typeof q === 'number' ? q - 1 : variant.minQty || 1));
    }
  };

  const handleIncrease = () => {
    setQuantity((q) => (typeof q === 'number' ? q + 1 : (variant.minQty || 1) + 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setQuantity('');
      return;
    }
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setQuantity(val);
    }
  };

  const handleAddedToCart = () => {
    if (isBulk) {
      setQuantity('');
    }
  };

  const safeQuantity = typeof quantity === 'number' ? quantity : (variant.minQty || 1);
  const displayQuantity = isBulk ? safeQuantity : (cartItem?.quantity || 1);
  const totalPrice = variant.price * displayQuantity;

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:bg-background/60 transition-colors">
      {/* Left: name + price */}
      <div className="flex items-center gap-4">
        <div>
          <p className="font-semibold text-primary">{variant.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-primary">
              ₹{variant.price}
              <span className="text-sm font-normal text-secondary ml-1">
                {variant.unit ? `/ ${variant.unit}` : ''}
              </span>
            </span>
            <span className="text-secondary line-through text-sm">
              ₹{variant.originalPrice}
            </span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: '#e8f5ee',
                color: '#1F8B45',
              }}
            >
              {discount}% OFF
            </span>
          </div>
        </div>
      </div>

      {/* Right: Quantity + Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
        
        {/* Quantity Selector for Bulk Items Only */}
        {isBulk && (
          <div className="flex items-center border border-primary rounded-lg overflow-hidden h-10 flex-shrink-0">
            <button
              onClick={handleDecrease}
              className="px-4 hover:bg-primary/10 h-full transition-colors flex items-center justify-center text-primary"
              disabled={typeof quantity === 'number' && quantity <= (variant.minQty || 1)}
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleChange}
              placeholder={String(variant.minQty || 1)}
              className="w-16 text-center h-full bg-transparent focus:outline-none text-primary text-sm font-semibold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={variant.minQty || 1}
            />
            <button
              onClick={handleIncrease}
              className="px-4 hover:bg-primary/10 h-full transition-colors flex items-center justify-center text-primary"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <AddToCartButton
            item={{
              id: cartItemId,
              serviceSlug: service.slug,
              serviceName: service.name,
              itemName: item.name,
              variantName: variant.name,
              price: variant.price,
              originalPrice: variant.originalPrice,
              image: item.image,
            }}
            quantity={isBulk ? (typeof quantity === 'number' ? quantity : (variant.minQty || 1)) : 1}
            mode={isBulk ? 'bulk' : 'countable'}
            onAdded={handleAddedToCart}
          />

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(
              /\D/g,
              ''
            )}?text=${encodeURIComponent(
              `Hello Hygiguard Solutions,\n\nI want to book:\n\nService: ${
                service.name
              }\nItem: ${item.name}\nVariant: ${variant.name}\nQuantity: ${displayQuantity} ${
                variant.unit || ''
              }\n\nPrice: ₹${totalPrice}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-semibold text-white px-5 h-10 rounded-lg transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ background: '#1F8B45' }}
            >
              <MessageCircle className="w-4 h-4" />
              Book ₹{totalPrice}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
