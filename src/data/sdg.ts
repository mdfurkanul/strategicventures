// Strategic Ventures' sustainability commitments, mapped to the UN Agenda 2030
// framework. Sequential 01-12 numbering for display; `unNum` is the official
// UN goal number we link out to (so users can verify the source).

export interface Goal {
  num: number;            // sequential display number (1..12)
  unNum: number;          // official UN SDG number it maps to
  color: 'navy' | 'sky' | 'growth';
  icon: 'lightbulb' | 'leaf' | 'globe' | 'target' | 'handshake' | 'sparkles' | 'strategy' | 'shield' | 'wheat' | 'cap' | 'check';
  title: { sv: string; en: string };
  desc: { sv: string; en: string };
}

export const goals: Goal[] = [
  {
    num: 1,
    unNum: 4,
    color: 'navy',
    icon: 'cap',
    title: { sv: 'Utbildning som driver förändring', en: 'Education that drives change' },
    desc: {
      sv: 'Vi bygger kunskap i organisationer genom utbildningar, workshops och mentorprogram.',
      en: 'We build capability through training, workshops and mentorship programmes.',
    },
  },
  {
    num: 2,
    unNum: 6,
    color: 'sky',
    icon: 'leaf',
    title: { sv: 'Rent vatten & sanitet', en: 'Clean water & sanitation' },
    desc: {
      sv: 'Vi stödjer resurseffektiva processer som minskar vattenförbrukning och utsläpp.',
      en: 'We support resource-efficient processes that reduce water use and discharge.',
    },
  },
  {
    num: 3,
    unNum: 7,
    color: 'growth',
    icon: 'sparkles',
    title: { sv: 'Hållbar energi för alla', en: 'Affordable & clean energy' },
    desc: {
      sv: 'Vi hjälper kunder övergå till förnybar energi och energieffektiva affärsmodeller.',
      en: 'We help clients transition to renewable energy and energy-efficient business models.',
    },
  },
  {
    num: 4,
    unNum: 8,
    color: 'navy',
    icon: 'handshake',
    title: { sv: 'Anständliga arbetsvillkor', en: 'Decent work & economic growth' },
    desc: {
      sv: 'Vi främjar ansvarsfulla leverantörskedjor och goda arbetsvillkor.',
      en: 'We promote responsible supply chains and fair working conditions.',
    },
  },
  {
    num: 5,
    unNum: 9,
    color: 'sky',
    icon: 'lightbulb',
    title: { sv: 'Innovation & infrastruktur', en: 'Innovation & infrastructure' },
    desc: {
      sv: 'Vi hjälper idéer nå marknaden och bygger hållbara innovationsekosystem.',
      en: 'We help ideas reach the market and build sustainable innovation ecosystems.',
    },
  },
  {
    num: 6,
    unNum: 11,
    color: 'growth',
    icon: 'strategy',
    title: { sv: 'Hållliga städer & samhällen', en: 'Sustainable cities & communities' },
    desc: {
      sv: 'Vi stödjer samhällsbyggnad och tjänster som gör städer mer inkluderande och motståndskraftiga.',
      en: 'We support services that make cities more inclusive, safe and resilient.',
    },
  },
  {
    num: 7,
    unNum: 12,
    color: 'navy',
    icon: 'wheat',
    title: { sv: 'Ansvarsfull konsumtion', en: 'Responsible consumption' },
    desc: {
      sv: 'Vi hjälper företag övergå till cirkulära affärsmodeller och minskat avfall.',
      en: 'We help businesses shift to circular models and minimise waste.',
    },
  },
  {
    num: 8,
    unNum: 13,
    color: 'sky',
    icon: 'globe',
    title: { sv: 'Klimatåtgärder', en: 'Climate action' },
    desc: {
      sv: 'Vi utvecklar strategier för att minska utsläpp och stärka klimatmotståndskraft.',
      en: 'We develop strategies to cut emissions and strengthen climate resilience.',
    },
  },
  {
    num: 9,
    unNum: 14,
    color: 'growth',
    icon: 'leaf',
    title: { sv: 'Hav & marina resurser', en: 'Life below water' },
    desc: {
      sv: 'Vi stödjer hållbara värdekedjor som skyddar marina ekosystem.',
      en: 'We support sustainable value chains that protect marine ecosystems.',
    },
  },
  {
    num: 10,
    unNum: 15,
    color: 'navy',
    icon: 'wheat',
    title: { sv: 'Livet på land', en: 'Life on land' },
    desc: {
      sv: 'Vi främjar biologisk mångfald och ansvarsfull markanvändning i projekt och supply chains.',
      en: 'We promote biodiversity and responsible land use across projects and supply chains.',
    },
  },
  {
    num: 11,
    unNum: 16,
    color: 'sky',
    icon: 'shield',
    title: { sv: 'Fred, rättvisa & styrning', en: 'Peace, justice & strong institutions' },
    desc: {
      sv: 'Vi stödjer etiska affärsmetoder, transparens och god bolagsstyrning.',
      en: 'We support ethical business practices, transparency and sound governance.',
    },
  },
  {
    num: 12,
    unNum: 17,
    color: 'growth',
    icon: 'handshake',
    title: { sv: 'Partnerskap för målen', en: 'Partnerships for the goals' },
    desc: {
      sv: 'Vi förbinder företag, forskning, investerare och offentlig sektor — såklart.',
      en: 'We connect business, research, investors and the public sector — that\'s what we do.',
    },
  },
];
