import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { bookingEmailTemplate } from '@/lib/emails/booking-template';
import { SITE_CONFIG } from '@/constants/site';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, location, service, message } = await req.json();

    if (!name || !phone || !location || !service) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const html = bookingEmailTemplate({
      name,
      phone,
      location,
      service,
      message,
      whatsapp: SITE_CONFIG.whatsapp,
    });

    const { data, error } = await resend.emails.send({
      from: 'HygiGuard Booking <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_TO!],
      subject: `New Service Booking Request from ${name}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
