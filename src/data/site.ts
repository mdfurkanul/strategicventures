// Global site configuration. Replace TODO placeholders with real values.

export const site = {
  name: 'Strategic Ventures',
  tagline: {
    sv: 'Connecting Opportunities',
    en: 'Connecting Opportunities',
  },
  // TODO: replace with real domain (also update astro.config.mjs)
  url: 'https://www.strategicventures.example',
  contact: {
    // TODO: replace with real email
    email: 'info@strategicventures.example',
    // TODO: replace with real phone (E.164)
    phone: '+46 (0) 00 000 00 00',
    // TODO: replace with real address
    address: 'City, Country',
    // TODO: replace with real LinkedIn URL
    linkedin: 'https://www.linkedin.com/company/strategic-ventures',
    // TODO: replace with Cloudflare Worker endpoint after deploy
    formEndpoint: 'https://strategic-ventures-contact.YOUR-SUBDOMAIN.workers.dev',
  },
  // TODO: replace founder details
  founder: {
    name: '[Founder Name]',
    role: { sv: 'Grundare & VD', en: 'Founder & CEO' },
    bio: {
      sv: '[Kort biografi om grundaren — erfarenhet, expertis och vision. Detta är en av er starkaste säljpunkter och bör fyllas i med verklig information.]',
      en: '[Short biography of the founder — experience, expertise and vision. This is one of your strongest selling points and should be filled in with real information.]',
    },
  },
} as const;

export type Locale = 'sv' | 'en';
