/**
 * Validation Utilities
 */

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[0-9]{10}$/;
  const cleaned = phone.replace(/\D/g, '');
  return phoneRegex.test(cleaned);
}

export function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

export function validateMessage(message: string): boolean {
  return message.trim().length >= 10 && message.trim().length <= 1000;
}

export interface ValidationErrors {
  [key: string]: string;
}

export function validateContactForm(formData: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!validateName(formData.name)) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  if (!validatePhoneNumber(formData.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateMessage(formData.message)) {
    errors.message = 'Message must be between 10 and 1000 characters';
  }

  return errors;
}
