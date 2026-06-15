'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Define the exact shape of our form state
export interface InquiryState {
  error?: string;
  success?: boolean;
}

// 2. Replace 'any' with our custom InquiryState type
export async function sendInquiry(
  prevState: InquiryState | null, 
  formData: FormData
): Promise<InquiryState> {

const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const sessionType = formData.get('sessionType') as string;
  const date = formData.get('date') as string;
  const details = formData.get('details') as string;
  
  const turnstileToken = formData.get('cf-turnstile-response') as string;

  if (!name || !email || !details) {
    return { error: 'Name, email, and details are required.' };
  }

  if (!turnstileToken) {
    return { error: 'Please complete the anti-bot verification.' };
  }

  try {
    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const res = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    const verifyData = await res.json();

    if (!verifyData.success) {
      return { error: 'Security verification failed. Please try again.' };
    }

    const { error } = await resend.emails.send({
      from: 'Film By Sabryna <onboarding@resend.dev>', 
      to: ['sabryna916@gmail.com'], // Replace with your actual receiving email
      subject: `New Session Inquiry: ${sessionType} - ${name}`,
      text: `
        New Inquiry Received!
        
        Name: ${name}
        Email: ${email}
        Session Type: ${sessionType || 'Not specified'}
        Requested Date: ${date || 'Not specified'}
        
        Details:
        ${details}
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    return { error: err + 'An unexpected error occurred.' };
  }
}