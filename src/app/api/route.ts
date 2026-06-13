/**
 * API Route for form submissions (optional)
 * This can be used to send emails or store form data
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Validate form data
    const errors = validateContactForm({
      name,
      phone,
      message,
    });

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Here you could:
    // 1. Send an email notification
    // 2. Store the data in a database
    // 3. Send to a CRM system
    // 4. Create a task/ticket in your system

    // For now, we'll just return success
    // In production, implement proper email/database functionality

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. We will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
