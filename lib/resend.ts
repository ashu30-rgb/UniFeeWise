import { Resend } from "resend";

let resendClient: Resend | null = null;

/**
 * Lazily initialize Resend so builds succeed without RESEND_API_KEY set.
 */
export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not configured. Add it to your environment before sending email."
    );
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}
