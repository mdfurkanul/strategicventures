// Cloudflare Worker — Strategic Ventures contact form handler
// Receives JSON from the website contact form and forwards it to email via MailChannels (free on CF).
//
// Deploy:
//   1. Install wrangler: npm i -g wrangler
//   2. cd worker && wrangler deploy
//   3. Set environment variables:
//        wrangler secret put CONTACT_TO_EMAIL     # e.g. info@yourdomain.com
//        wrangler secret put CONTACT_FROM_EMAIL   # e.g. website@yourdomain.com (must be on Cloudflare)
//   4. Allow CORS from your domain (set ALLOWED_ORIGIN below)
//   5. Paste the worker URL into src/data/site.ts -> contact.formEndpoint

const ALLOWED_ORIGIN = 'https://www.strategicventures.example';

const CORS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: CORS });
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ ok: false, error: 'Invalid JSON' }, 400);
    }

    // Basic honeypot / validation
    if (data._site && data._site !== 'strategicventures') {
      return json({ ok: false, error: 'Forbidden' }, 403);
    }
    if (!data.name || !data.email || !data.message) {
      return json({ ok: false, error: 'Missing fields' }, 400);
    }
    if (data.email.length > 200 || data.message.length > 5000) {
      return json({ ok: false, error: 'Too long' }, 400);
    }

    const to = env.CONTACT_TO_EMAIL;
    const from = env.CONTACT_FROM_EMAIL;
    if (!to || !from) {
      return json({ ok: false, error: 'Server not configured' }, 500);
    }

    const subject = `Website enquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`;
    const text = [
      `New enquiry from strategicventures.example`,
      ``,
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Company: ${data.company || '-'}`,
      `Locale:  ${data.locale || '-'}`,
      ``,
      `Message:`,
      data.message,
    ].join('\n');

    try {
      // MailChannels is available free on Cloudflare Workers
      const res = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from, name: 'Strategic Ventures Website' },
          subject,
          content: [{ type: 'text/plain', value: text }],
          reply_to: { email: data.email, name: data.name },
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        return json({ ok: false, error: 'Mail error' }, 502);
      }
      return json({ ok: true }, 200);
    } catch (e) {
      return json({ ok: false, error: 'Network error' }, 502);
    }
  },
};

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });
}
