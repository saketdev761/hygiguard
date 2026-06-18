/**
 * Contact Form Component
 */

'use client';

import React, { useState } from 'react';
import { Button, Text } from '@/components/ui';
import { SITE_CONFIG, SERVICES } from '@/constants/site';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // 1. Send email via Resend
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send email');
      }

      // 2. Send WhatsApp message
      //   const message = `Hello, I would like to book a service:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
      //   const encodedMessage = encodeURIComponent(message);
      // const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;

      if (onSubmit) {
        onSubmit(formData);
      }

      //   window.open(whatsappUrl, '_blank');

      setSuccessMessage(
        'Your request has been sent! We will contact you shortly.'
      );
      setFormData({
        name: '',
        phone: '',
        location: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-primary mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-primary mb-2"
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Your phone number"
          className="w-full"
        />
      </div>

      {/* Location Field */}
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-semibold text-primary mb-2"
        >
          Location *
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full"
        >
          <option value="">Select your location</option>
          {SITE_CONFIG.serviceAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      {/* Service Field */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-primary mb-2"
        >
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full"
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-primary mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any additional details..."
          rows={5}
          className="w-full"
        />
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="p-4 bg-success bg-opacity-10 text-success rounded-lg">
          <Text variant="body">{successMessage}</Text>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-danger bg-opacity-10 text-danger rounded-lg">
          <Text variant="body">{errorMessage}</Text>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isLoading}
        className="w-full"
      >
        Submit Request
      </Button>

      <Text variant="caption" className="text-center">
        By submitting this form, you agree to our terms and conditions.
      </Text>
    </form>
  );
};
