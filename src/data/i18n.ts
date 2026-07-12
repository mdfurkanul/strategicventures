import type { Locale } from './site';

export const ui = {
  sv: {
    nav: {
      home: 'Hem',
      about: 'Om oss',
      services: 'Tjänster',
      industries: 'Branscher',
      why: 'Varför oss',
      sustainability: 'Hållbarhet',
      contact: 'Kontakt',
    },
    cta: {
      primary: 'Kontakta oss',
      secondary: 'Boka ett samtal',
      services: 'Utforska tjänster',
      readMore: 'Läs mer',
      discuss: 'Diskutera ditt projekt',
      allServices: 'Se alla tjänster',
    },
    hero: {
      eyebrow: 'Internationell management-, innovations- & hållbarhetskonsult',
      title: 'Vi förbinder idéer. Skapar värde. Skapar hållbar tillväxt.',
      subtitle:
        'Strategic Ventures hjälper företag, entreprenörer, universitet och offentliga organisationer att förvandla idéer till framgångsrika produkter, tjänster och hållbara verksamheter.',
      primaryCta: 'Låt oss diskutera ert nästa projekt',
      secondaryCta: 'Upptäck vad vi gör',
    },
    pillars: {
      title: 'Våra tre strategiska pelare',
      subtitle: 'Varje färg i vår identitet speglar ett löfte till våra kunder.',
      trust: {
        name: 'Förtroende',
        color: 'Marinblå',
        desc: 'Oberoende, professionell rådgivning grundad i integritet och långsiktigt engagemang.',
      },
      innovation: {
        name: 'Innovation',
        color: 'Grön',
        desc: 'Vi hjälper idéer nå marknaden och skapa hållbar konkurrenskraft.',
      },
      connection: {
        name: 'Samverkan',
        color: 'Ljusblå',
        desc: 'Vi förbinder företag, forskning, investerare och samhälle.',
      },
    },
    servicesPreview: {
      title: 'Våra tjänsteområden',
      subtitle:
        'Sex enhöriga pelare som tillsammans täcker hela resan från strategi till genomförande.',
    },
    why: {
      title: 'Varför välja Strategic Ventures?',
      subtitle:
        'Vi är mer än en konsult — vi är en strategisk partner från idé till kommersiell framgång.',
      items: [
        { t: 'Multidisciplinärt perspektiv', d: 'Vi kombinerar affärsstrategi, innovation, hållbarhet och kommersialisering i integrerade lösningar.' },
        { t: 'Praktisk implementering', d: 'Vi går bortom rekommendationer och stödjer genom hela genomförandet.' },
        { t: 'Internationellt perspektiv', d: 'Erfarenhet från olika branscher och internationella marknader.' },
        { t: 'Innovationsexpertis', d: 'Från nya produkter och tjänster till affärsmodellsinnovation.' },
        { t: 'Starka partnerskap', d: 'Vi förbinder kunder med universitet, forskningsinstitut, investerare och teknikpartners.' },
        { t: 'Skräddarsydda lösningar', d: 'Varje kund är unik — vi designar lösningar utifrån era mål och utmaningar.' },
      ],
    },
    ctaBand: {
      title: 'Redo att ta nästa steg?',
      subtitle:
        'Kontakta oss för ett förutsättningslöst samtal om hur vi kan bidra till din verksamhets utveckling.',
      button: 'Kontakta Strategic Ventures',
    },
    footer: {
      tagline: 'Connecting Opportunities — vi förbinder människor, idéer och marknader för att skapa hållbar tillväxt.',
      services: 'Tjänster',
      company: 'Företag',
      contact: 'Kontakt',
      rights: 'Alla rättigheter förbehållna.',
      privacy: 'Integritetspolicy',
    },
    contact: {
      title: 'Kontakta oss',
      subtitle: 'Låt oss diskutera hur vi kan stödja er utveckling.',
      name: 'Namn',
      email: 'E-post',
      company: 'Företag',
      message: 'Meddelande',
      send: 'Skicka meddelande',
      sending: 'Skickar…',
      success: 'Tack! Vi återkommer inom kort.',
      error: 'Något gick fel. Försök igen eller maila oss direkt.',
      callCta: 'Boka ett förutsättningslöst samtal',
      formTitle: 'Skriv till oss',
    },
    industries: {
      title: 'Branscher vi betjänar',
      subtitle:
        'Vi arbetar över branschgränser — från livsmedel och tillverkning till forskning, offentlig sektor och investerare.',
      list: [
        'Livsmedel & dryck',
        'Mejeri',
        'Tillverkning',
        'SME & småföretag',
        'Universitet',
        'Forskningsinstitut',
        'Offentlig sektor',
        'Ideella organisationer',
        'Investerare',
        'Start-ups',
        'Teknikföretag',
        'Hälsa & life science',
        'CleanTech',
        'Cirkulär ekonomi',
        'Internationella organisationer',
      ],
    },
    about: {
      heroTitle: 'Mer än en konsult — en strategisk partner',
      missionTitle: 'Vårt uppdrag',
      mission:
        'Vårt uppdrag är att stödja organisationer att innovera, växa och skapa bestående värde genom strategisk rådgivning, praktiska lösningar och samarbetspartnerskap.',
      visionTitle: 'Vår vision',
      vision:
        'Att bli en pålitlig internationell partner för organisationer som söker hållbar tillväxt, innovation och affärsutveckling.',
      approachTitle: 'Vårt arbetssätt',
      approach: [
        { t: 'Strategiskt tänkande', d: 'Vi utvecklar tydliga strategier som stödjer hållbar affärstillväxt.' },
        { t: 'Innovation', d: 'Vi förvandlar idéer till kommersiellt framgångsrika produkter och tjänster.' },
        { t: 'Samverkan', d: 'Vi bygger starka partnerskap mellan företag, universitet, forskning och offentlig sektor.' },
        { t: 'Implementering', d: 'Vi stödjer genom hela genomförandet — inte bara rådgivning.' },
        { t: 'Hållbarhet', d: 'Vi integrerar miljömässiga, sociala och ekonomiska hänsyn i allt vi gör.' },
      ],
      valuesTitle: 'Våra värderingar',
      commitmentTitle: 'Vårt åtagande',
      commitment:
        'Vi är engagerade i att leverera högkvalitativa konsulttjänster som skapar mätbart värde för våra kunder och bidrar till hållbar ekonomisk utveckling och positiv samhällspåverkan.',
      founderTitle: 'Möt grundaren',
    },
    values: [
      { name: 'Samverkan', desc: 'Vi skapar möjligheter genom att föra samman rätt aktörer.' },
      { name: 'Innovation', desc: 'Vi förvandlar idéer till bestående värde.' },
      { name: 'Integritet', desc: 'Vi bygger förtroende genom professionalism och transparens.' },
      { name: 'Excellens', desc: 'Vi levererar kvalitet utan kompromisser.' },
      { name: 'Hållbarhet', desc: 'Vi skapar värde för företag, samhälle och framtida generationer.' },
      { name: 'Möjligheter', desc: 'Vi ser möjligheter där andra ser utmaningar.' },
      { name: 'Globalt perspektiv', desc: 'Vi förbinder lokal expertis med internationella möjligheter.' },
    ],
    services: {
      heroTitle: 'Tjänster som skapar resultat',
      heroSubtitle:
        'Från strategi till genomförande — vi erbjuder integrerad rådgivning som täcker hela resan från idé till marknad.',
    },
    sustainability: {
      heroTitle: 'Hållbarhet i kärnan av allt vi gör',
      subtitle:
        'För Strategic Ventures är hållbarhet inte en isolerad fråga — det är en grundprincip som formar hur vi rådge våra kunder, utvecklar partnerskap och skapar långsiktigt värde.',
      philosophyTitle: 'Vår hållbarhetsfilosofi',
      philosophy:
        'Vi tror att hållbar utveckling och kommersiell framgång går hand i hand. Vårt uppdrag är att hjälpa organisationer förvandla hållbarhet från en efterlevnadsskyldighet till ett strategiskt fokuserat konkurrensfördel.',
      commitmentTitle: 'Vårt åtagande',
      commitmentList: [
        'Integrera hållbarhet i affärsstrategi och organisationsutveckling.',
        'Främja innovation som skapar positiva ekonomiska, miljömässiga och sociala effekter.',
        'Stödja ansvarsfullt ledarskap, etiska affärsmetoder och god bolagsstyrning.',
        'Uppmuntra resurseffektivitet, cirkulära affärsmodeller och klimatmedvetna beslut.',
        'Underlätta samverkan mellan företag, akademi, offentlig sektor och investerare.',
        'Skapa långsiktigt värde för kunder, intressenter och samhälle.',
      ],
      sdgTitle: 'FN:s hållbarhetsmål',
      sdg:
        'Vi hjälper organisationer att knyta sina strategier till de hållbarhetsmål som är mest relevanta för deras verksamhet — och leverera praktiska lösningar som skapar mätbar affärsnytta.',
      actionTitle: 'Hållbarhet i praktiken',
      action:
        'Vi stödjer organisationer att utveckla innovativa lösningar, säkra finansiering för hållbara initiativ, bygga strategiska partnerskap och expandera till nya marknader — samtidigt som vi integrerar ansvarsfulla affärsmetoder.',
    },
    privacy: {
      title: 'Integritetspolicy',
      updated: 'Senast uppdaterad',
      body: `
Vi på Strategic Ventures värdesätter din integritet. Denna policy beskriver hur vi hanterar personuppgifter.

## Vilka uppgifter vi samlar in
Vi samlar endast in de uppgifter du själv lämnar via kontaktformuläret — namn, e-post, företag och meddelande.

## Hur vi använder uppgifterna
Uppgifterna används enbart för att svara på din förfrågan och för eventual framtida affärskommunikation med ditt samtycke.

## Lagring och delning
Vi delar inte dina uppgifter med tredje part. Uppgifterna lagras säkert och raderas på din begäran.

## Dina rättigheter
Enligt GDPR har du rätt att begära insyn, rättning eller radering av dina uppgifter. Kontakta oss för att utöva dina rättigheter.

## Kontakt
Frågor om denna policy eller dina personuppgifter? Skicka ett mail till oss.
      `,
    },
    cookie: {
      msg: 'Vi använder endast nödvändiga cookies för att webbplatsen ska fungera. Inga spårningscookies sätts utan ditt samtycke.',
      accept: 'Okej',
      privacy: 'Läs mer',
    },
    common: {
      languageLabel: 'Språk',
      backToServices: 'Tillbaka till tjänster',
      menu: 'Meny',
      close: 'Stäng',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      industries: 'Industries',
      why: 'Why Us',
      sustainability: 'Sustainability',
      contact: 'Contact',
    },
    cta: {
      primary: 'Contact us',
      secondary: 'Book a consultation',
      services: 'Explore services',
      readMore: 'Read more',
      discuss: 'Discuss your project',
      allServices: 'See all services',
    },
    hero: {
      eyebrow: 'International management, innovation & sustainability consultancy',
      title: 'Connecting Ideas. Creating Value. Delivering Sustainable Growth.',
      subtitle:
        'Strategic Ventures helps businesses, entrepreneurs, universities and public organisations transform ideas into successful products, services and sustainable businesses.',
      primaryCta: "Let's discuss your next project",
      secondaryCta: 'Discover what we do',
    },
    pillars: {
      title: 'Our three strategic pillars',
      subtitle: 'Every colour in our identity reflects a promise to our clients.',
      trust: {
        name: 'Trust',
        color: 'Navy',
        desc: 'Independent, evidence-based advice grounded in integrity and long-term commitment.',
      },
      innovation: {
        name: 'Innovation',
        color: 'Green',
        desc: 'We help ideas reach the market and create lasting competitive advantage.',
      },
      connection: {
        name: 'Connection',
        color: 'Light Blue',
        desc: 'We connect business, research, investors and society.',
      },
    },
    servicesPreview: {
      title: 'Our service pillars',
      subtitle: 'Six integrated pillars spanning the full journey from strategy to implementation.',
    },
    why: {
      title: 'Why choose Strategic Ventures?',
      subtitle:
        'More than a consultancy — a strategic partner from idea to commercial success.',
      items: [
        { t: 'Multidisciplinary perspective', d: 'We combine business strategy, innovation, sustainability and commercialisation into integrated solutions.' },
        { t: 'Practical implementation', d: 'We go beyond recommendations and support clients throughout delivery.' },
        { t: 'International outlook', d: 'Experience across industries and international markets.' },
        { t: 'Innovation expertise', d: 'From new products and services to business model innovation.' },
        { t: 'Strong partnerships', d: 'We connect clients with universities, research institutes, investors and technology partners.' },
        { t: 'Tailored solutions', d: 'Every client is unique — we design solutions around your goals.' },
      ],
    },
    ctaBand: {
      title: 'Ready to take the next step?',
      subtitle:
        'Contact us for a no-obligation conversation about how we can support your organisation.',
      button: 'Contact Strategic Ventures',
    },
    footer: {
      tagline: 'Connecting Opportunities — we connect people, ideas and markets to create sustainable growth.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
    },
    contact: {
      title: 'Contact us',
      subtitle: "Let's discuss how we can support your development.",
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: 'Thank you! We will be in touch shortly.',
      error: 'Something went wrong. Please try again or email us directly.',
      callCta: 'Book a no-obligation consultation',
      formTitle: 'Send us a message',
    },
    industries: {
      title: 'Industries we serve',
      subtitle:
        'We work across sectors — from food and manufacturing to research, public sector and investors.',
      list: [
        'Food & Beverage',
        'Dairy',
        'Manufacturing',
        'SMEs',
        'Universities',
        'Research Institutes',
        'Public Sector',
        'NGOs',
        'Investors',
        'Start-ups',
        'Technology Companies',
        'Healthcare & Life Sciences',
        'CleanTech',
        'Circular Economy',
        'International Organisations',
      ],
    },
    about: {
      heroTitle: 'More than a consultancy — a strategic partner',
      missionTitle: 'Our mission',
      mission:
        'Our mission is to empower organisations to innovate, grow and create lasting value through strategic consultancy, practical solutions and collaborative partnerships.',
      visionTitle: 'Our vision',
      vision:
        'To become a trusted international partner for organisations seeking sustainable growth, innovation and business transformation.',
      approachTitle: 'Our approach',
      approach: [
        { t: 'Strategic thinking', d: 'Clear strategies that support sustainable business growth.' },
        { t: 'Innovation', d: 'Turning ideas into commercially successful products and services.' },
        { t: 'Collaboration', d: 'Strong partnerships between business, universities, research and the public sector.' },
        { t: 'Implementation', d: 'We support clients beyond strategy — helping execute successfully.' },
        { t: 'Sustainability', d: 'Integrating environmental, social and economic considerations into everything we do.' },
      ],
      valuesTitle: 'Our values',
      commitmentTitle: 'Our commitment',
      commitment:
        'We are committed to delivering high-quality consultancy that creates measurable value for our clients while contributing to sustainable economic development and positive societal impact.',
      founderTitle: 'Meet the founder',
    },
    values: [
      { name: 'Collaboration', desc: 'We create opportunities by bringing the right players together.' },
      { name: 'Innovation', desc: 'We transform ideas into lasting value.' },
      { name: 'Integrity', desc: 'We build trust through professionalism and transparency.' },
      { name: 'Excellence', desc: 'We deliver quality without compromise.' },
      { name: 'Sustainability', desc: 'We create value for business, society and future generations.' },
      { name: 'Opportunity', desc: 'We see possibilities where others see challenges.' },
      { name: 'Global Perspective', desc: 'We connect local expertise with international opportunities.' },
    ],
    services: {
      heroTitle: 'Services that deliver results',
      heroSubtitle:
        'From strategy to implementation — integrated consultancy covering the full journey from idea to market.',
    },
    sustainability: {
      heroTitle: 'Sustainability at the core of everything we do',
      subtitle:
        'For Strategic Ventures, sustainability is not an isolated initiative — it is a fundamental principle that shapes how we advise clients, develop partnerships and create long-term value.',
      philosophyTitle: 'Our sustainability philosophy',
      philosophy:
        'We believe that sustainable development and commercial success go hand in hand. Our role is to help organisations transform sustainability from a compliance obligation into a strategic competitive advantage.',
      commitmentTitle: 'Our commitment',
      commitmentList: [
        'Integrate sustainability into business strategy and organisational development.',
        'Promote innovation that creates positive economic, environmental and social outcomes.',
        'Support responsible leadership, ethical business practices and sound governance.',
        'Encourage resource efficiency, circular business models and climate-conscious decisions.',
        'Facilitate collaboration between businesses, academia, public organisations and investors.',
        'Create long-term value for clients, stakeholders and society.',
      ],
      sdgTitle: 'UN Sustainable Development Goals',
      sdg:
        'We help organisations align their strategies with the SDGs most relevant to their operations — and deliver practical solutions that generate measurable business value.',
      actionTitle: 'Sustainability in action',
      action:
        'We support organisations in developing innovative solutions, securing funding for sustainable initiatives, building strategic partnerships and expanding into new markets — all while integrating responsible business practices.',
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated',
      body: `
At Strategic Ventures we respect your privacy. This policy describes how we handle personal data.

## What we collect
We only collect information you provide via the contact form — name, email, company and message.

## How we use it
This information is used solely to respond to your enquiry and, with your consent, for future business communication.

## Storage and sharing
We do not share your data with third parties. Data is stored securely and deleted on request.

## Your rights
Under GDPR you have the right to access, correct or delete your personal data. Contact us to exercise these rights.

## Contact
Questions about this policy or your personal data? Send us an email.
      `,
    },
    cookie: {
      msg: 'We only use essential cookies required for the website to function. No tracking cookies are set without your consent.',
      accept: 'OK',
      privacy: 'Read more',
    },
    common: {
      languageLabel: 'Language',
      backToServices: 'Back to services',
      menu: 'Menu',
      close: 'Close',
    },
  },
} as const;

export type UI = typeof ui.sv;
export function getUI(locale: Locale): UI {
  return ui[locale];
}
