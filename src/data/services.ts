import type { Locale } from './site';

// Six service pillars + Executive Education (7th service page)
export interface SubService {
  title: { sv: string; en: string };
  description: { sv: string; en: string };
}

export interface ServicePillar {
  slug: string;        // English slug used for both /tjanster/<slug> and /en/services/<slug>
  color: 'navy' | 'sky' | 'growth';
  icon: 'strategy' | 'leaf' | 'lightbulb' | 'wheat' | 'handshake' | 'globe' | 'cap';
  name: { sv: string; en: string };
  short: { sv: string; en: string };
  intro: { sv: string; en: string };
  subservices: SubService[];
  closing: { sv: string; en: string };
}

export const services: ServicePillar[] = [
  {
    slug: 'business-strategy',
    color: 'navy',
    icon: 'strategy',
    name: { sv: 'Affärsutveckling & Strategi', en: 'Business Strategy & Growth' },
    short: {
      sv: 'Strategisk rådgivning och affärsutveckling som skapar långsiktig tillväxt.',
      en: 'Strategic advisory and business development that drive long-term growth.',
    },
    intro: {
      sv: 'Vi erbjuder kvalificerad rådgivning till företag i olika utvecklingsfaser. Tillsammans identifierar vi möjligheter, hanterar utmaningar och tar fram strategier som bidrar till en stabil och hållbar verksamhet.',
      en: 'Our business consultancy services help organisations navigate challenges, seize new opportunities and achieve sustainable growth. We work closely with our clients to develop practical, results-driven strategies that enhance performance and create long-term competitive advantage.',
    },
    subservices: [
      {
        title: { sv: 'Affärsutveckling & affärsstrategi', en: 'Business Development & Strategy' },
        description: {
          sv: 'Vi hjälper företag att utveckla och implementera affärsstrategier som stärker konkurrenskraften, ökar lönsamheten och skapar nya affärsmöjligheter.',
          en: 'We help organisations develop and implement robust business strategies that drive growth, improve profitability and position them for long-term success.',
        },
      },
      {
        title: { sv: 'Affärsplaner', en: 'Business Planning' },
        description: {
          sv: 'Vi tar fram professionella affärsplaner för företagsstarter, expansion, finansiering och investeringar — utformade utifrån företagets mål och marknadens förutsättningar.',
          en: 'We develop professional business plans for new ventures, expansion, investment and funding — aligned with commercial objectives and market realities.',
        },
      },
      {
        title: { sv: 'Marknadsanalys', en: 'Market Research & Analysis' },
        description: {
          sv: 'Vi analyserar marknader, kundbehov och konkurrenter för att ge ett stabilt beslutsunderlag inför etableringar, produktlanseringar eller strategiska satsningar.',
          en: 'We conduct comprehensive market research, competitor analysis and customer insight studies that enable confident strategic decisions.',
        },
      },
      {
        title: { sv: 'Projektledning', en: 'Project Management' },
        description: {
          sv: 'Vi planerar, leder och följer upp projekt från idé till genomförande — i tid, inom budget och med önskat resultat.',
          en: 'We manage projects from concept to completion — on time, within budget and to the highest professional standards.',
        },
      },
      {
        title: { sv: 'Förändringsledning', en: 'Change Management' },
        description: {
          sv: 'Vi stödjer organisationer vid förändringsprocesser genom struktur, engagemang och effektiva arbetssätt som underlättar en framgångsrik omställning.',
          en: 'We help organisations manage change through clear strategies, stronger engagement and practical solutions that support successful transformation.',
        },
      },
      {
        title: { sv: 'Organisationsutveckling', en: 'Organisational Development' },
        description: {
          sv: 'Vi hjälper företag att utveckla organisation, ledarskap och arbetsprocesser för en effektiv, hållbar och välfungerande verksamhet.',
          en: 'We help organisations strengthen leadership, optimise structures and improve operational performance to build sustainable, high-performing businesses.',
        },
      },
      {
        title: { sv: 'Processeffektivisering', en: 'Operational & Process Improvement' },
        description: {
          sv: 'Vi analyserar verksamhetens processer och identifierar förbättringsområden för att öka produktivitet, kvalitet och resurseffektivitet.',
          en: 'We analyse business processes and implement solutions that enhance productivity, quality and resource efficiency.',
        },
      },
      {
        title: { sv: 'Ekonomisk planering & budgetering', en: 'Financial Planning & Budgeting' },
        description: {
          sv: 'Vi erbjuder stöd inom ekonomisk planering, budgetarbete och uppföljning för god kontroll över företagets ekonomi och framtida investeringar.',
          en: 'We support organisations with budgeting, financial planning and performance monitoring for greater financial control.',
        },
      },
      {
        title: { sv: 'Risk- & affärsanalys', en: 'Business Risk & Strategic Analysis' },
        description: {
          sv: 'Vi identifierar affärsrisker och möjligheter samt genomför analyser som ger ett tryggare beslutsunderlag för strategiska och operativa beslut.',
          en: 'We provide comprehensive business and risk analysis so organisations can evaluate options and make well-informed decisions.',
        },
      },
      {
        title: { sv: 'Företagsstart & entreprenörsrådgivning', en: 'Start-up & Entrepreneurship Advisory' },
        description: {
          sv: 'Vi vägleder entreprenörer genom hela processen — från affärsidé till etablerat företag.',
          en: 'From initial concept to successful launch, we support entrepreneurs through every stage of their journey.',
        },
      },
    ],
    closing: {
      sv: 'Vi hjälper företag, entreprenörer och organisationer att utveckla hållbara och lönsamma verksamheter genom strategisk rådgivning, affärsutveckling och projektledning — med skräddarsydda lösningar som stärker konkurrenskraften och skapar långsiktig tillväxt.',
      en: 'We help businesses, entrepreneurs and organisations develop sustainable and profitable operations through strategic advisory, business development and project leadership — with tailored solutions that strengthen competitiveness and create long-term growth.',
    },
  },

  {
    slug: 'sustainability-esg',
    color: 'growth',
    icon: 'leaf',
    name: { sv: 'Hållbarhet & ESG', en: 'Sustainability & ESG' },
    short: {
      sv: 'Integrera hållbarhet i strategi, drift och beslutsfattande.',
      en: 'Embed sustainability into strategy, operations and decision-making.',
    },
    intro: {
      sv: 'Vi hjälper företag och organisationer att integrera hållbarhet i sin verksamhet på ett strategiskt och affärsmässigt sätt. Genom att kombinera ekonomisk, miljömässig och social hållbarhet skapar vi långsiktigt värde, stärker konkurrenskraften och bidrar till en hållbar utveckling.',
      en: 'We help businesses and organisations embed sustainability into their strategy, operations and decision-making. By integrating economic, environmental and social sustainability, we enable organisations to create long-term value, strengthen competitiveness and deliver meaningful impact.',
    },
    subservices: [
      {
        title: { sv: 'Hållbarhetsstrategier', en: 'Sustainability Strategy' },
        description: {
          sv: 'Vi utvecklar hållbarhetsstrategier anpassade till företagets verksamhet, mål och vision — integrerade i affärsstrategin.',
          en: 'We develop tailored sustainability strategies aligned with business objectives, values and future ambitions.',
        },
      },
      {
        title: { sv: 'Agenda 2030 & FN:s globala mål', en: 'Agenda 2030 & UN SDGs' },
        description: {
          sv: 'Vi hjälper företag att identifiera relevanta mål och omsätta dem i praktiska åtgärder som skapar affärsnytta och samhällsutveckling.',
          en: 'We help organisations translate the SDGs into practical business initiatives that create commercial and societal value.',
        },
      },
      {
        title: { sv: 'ESG-rådgivning', en: 'ESG Advisory' },
        description: {
          sv: 'Vi stödjer företag att identifiera risker, möjligheter och förbättringsområden inom miljö, socialt ansvar och bolagsstyrning.',
          en: 'We help organisations implement practical ESG strategies that enhance resilience, transparency and long-term value.',
        },
      },
      {
        title: { sv: 'Klimat- & miljöstrategier', en: 'Climate & Environmental Strategy' },
        description: {
          sv: 'Vi utvecklar strategier för att minska miljö- och klimatpåverkan genom resurseffektiva arbetssätt och hållbara affärsmodeller.',
          en: 'We help organisations reduce their footprint through practical climate and environmental strategies.',
        },
      },
      {
        title: { sv: 'Cirkulär ekonomi', en: 'Circular Economy' },
        description: {
          sv: 'Vi stödjer företag i omställningen till cirkulära affärsmodeller där resurser används effektivt och avfall minimeras.',
          en: 'We help organisations redesign products and business models to maximise resource efficiency and minimise waste.',
        },
      },
      {
        title: { sv: 'Hållbara inköp & leverantörskedjor', en: 'Sustainable Procurement & Supply Chains' },
        description: {
          sv: 'Vi hjälper företag utveckla hållbara inköpsstrategier och ansvarsfulla leverantörskedjor genom transparens och riskminskning.',
          en: 'We develop procurement strategies that promote transparency and integrate sustainability across the value chain.',
        },
      },
      {
        title: { sv: 'Hållbarhetsrapportering', en: 'Sustainability Reporting' },
        description: {
          sv: 'Vi erbjuder stöd vid framtagning av hållbarhetsrapporter som uppfyller aktuella krav och tydliggör ert hållbarhetsarbete.',
          en: 'We prepare sustainability reports that meet regulatory requirements and clearly demonstrate performance.',
        },
      },
      {
        title: { sv: 'Social hållbarhet & CSR', en: 'Social Sustainability & CSR' },
        description: {
          sv: 'Vi hjälper företag utveckla strategier för mångfald, inkludering, etik och ett aktivt samhällsengagemang.',
          en: 'We develop CSR strategies that promote ethical practices, diversity, inclusion and community engagement.',
        },
      },
    ],
    closing: {
      sv: 'Vi tror att hållbarhet är en drivkraft för innovation, tillväxt och konkurrenskraft. Genom att kombinera strategisk rådgivning med praktiska lösningar hjälper vi våra kunder att möta framtidens utmaningar och skapa långsiktigt värde.',
      en: 'We believe sustainability is a catalyst for innovation, resilience and long-term business success. Together, we create solutions that generate lasting value for businesses, communities and future generations.',
    },
  },

  {
    slug: 'innovation',
    color: 'sky',
    icon: 'lightbulb',
    name: { sv: 'Innovation & Kommersialisering', en: 'Innovation & Commercialisation' },
    short: {
      sv: 'Förvandla idéer till kommersiellt framgångsrika produkter, tjänster och affärsmodeller.',
      en: 'Transform ideas into commercially successful products, services and business models.',
    },
    intro: {
      sv: 'Innovation handlar om att skapa värde, lösa verkliga utmaningar och omvandla idéer till hållbara affärsmöjligheter. Vi hjälper företag, entreprenörer, universitet och offentliga organisationer att utveckla innovativa produkter, tjänster och affärsmodeller som möter framtidens behov.',
      en: 'Innovation is about creating value, solving real-world challenges and transforming ideas into sustainable business opportunities. We help organisations develop innovative products, services and business models that meet the needs of tomorrow.',
    },
    subservices: [
      {
        title: { sv: 'Produktinnovation', en: 'Product Innovation' },
        description: {
          sv: 'Från idéutveckling och konceptvalidering till marknadslansering — vi förvandlar idéer till konkurrenskraftiga produkter.',
          en: 'From concept and validation to market launch, we help transform ideas into commercially successful products.',
        },
      },
      {
        title: { sv: 'Tjänsteinnovation', en: 'Service Innovation' },
        description: {
          sv: 'Vi designar och utvecklar tjänster som förbättrar kundupplevelsen och stärker konkurrenskraften.',
          en: 'We design and develop services that enhance customer experience and strengthen market competitiveness.',
        },
      },
      {
        title: { sv: 'Innovationsstrategi', en: 'Innovation Strategy' },
        description: {
          sv: 'Vi utvecklar innovationsstrategier nära kopplade till verksamhetens mål och etablerar strukturerade innovationsprocesser.',
          en: 'We develop innovation strategies aligned with business objectives that deliver measurable results.',
        },
      },
      {
        title: { sv: 'Konceptutveckling & validering', en: 'Concept Development & Validation' },
        description: {
          sv: 'Vi utvärderar och validerar idéer genom marknadsanalyser och kommersiella bedömningar innan investeringar.',
          en: 'We evaluate and validate ideas through market analysis and commercial assessment before investment.',
        },
      },
      {
        title: { sv: 'Innovation av affärsmodeller', en: 'Business Model Innovation' },
        description: {
          sv: 'Vi hjälper företag att utveckla affärsmodeller som möter förändrade kundbehov och nya marknadsförutsättningar.',
          en: 'We help organisations design resilient, scalable and commercially sustainable business models.',
        },
      },
      {
        title: { sv: 'Kommersialisering & marknadsintroduktion', en: 'Commercialisation & Market Launch' },
        description: {
          sv: 'Vi utvecklar strategier för kommersialisering, prissättning och etablering som maximera förutsättningarna för framgång.',
          en: 'We build commercialisation strategies, pricing models and go-to-market plans for successful adoption.',
        },
      },
      {
        title: { sv: 'Innovationsprocessdesign', en: 'Innovation Process Design' },
        description: {
          sv: 'Vi etablerar strukturerade innovationsprocesser som förkortar utvecklingstider och ökar innovationsförmågan.',
          en: 'We establish structured innovation processes that accelerate development and reduce time to market.',
        },
      },
      {
        title: { sv: 'Forskning, samverkan & öppen innovation', en: 'Research, Collaboration & Open Innovation' },
        description: {
          sv: 'Vi skapar samarbeten mellan företag, universitet, forskningsinstitut, investerare och offentliga aktörer.',
          en: 'We facilitate partnerships between businesses, universities, research bodies, investors and public institutions.',
        },
      },
    ],
    closing: {
      sv: 'Vi ser innovation som grunden för långsiktig konkurrenskraft och hållbar tillväxt. Oavsett om du utvecklar en ny produkt, lanserar en innovativ tjänst eller skapar en ny affärsmodell erbjuder vi den strategiska kompetens och det praktiska stöd som krävs.',
      en: 'We see innovation as the foundation of long-term competitiveness and sustainable growth. Whether developing a new product, launching an innovative service or creating a new business model, we provide the strategic expertise and practical support needed.',
    },
  },

  {
    slug: 'food-innovation',
    color: 'growth',
    icon: 'wheat',
    name: { sv: 'Livsmedelsinnovation & Produktutveckling', en: 'Food Innovation & Product Development' },
    short: {
      sv: 'Specialistkompetens inom livsmedelsinnovation — från idé till marknad.',
      en: 'Specialist expertise in food innovation — from concept to market.',
    },
    intro: {
      sv: 'Vi hjälper företag, entreprenörer och organisationer att utveckla innovativa, hållbara och marknadsanpassade livsmedelsprodukter. Genom att kombinera vetenskap, affärsutveckling och praktisk erfarenhet stödjer vi hela innovationsprocessen — från idé och produktutveckling till kommersialisering.',
      en: 'We help businesses and organisations transform innovative ideas into commercially successful, sustainable food products. By combining scientific expertise, strategic business development and practical industry experience, we support every stage of the innovation journey.',
    },
    subservices: [
      {
        title: { sv: 'Produktutveckling', en: 'Product Development' },
        description: {
          sv: 'Stöd genom hela produktutvecklingsprocessen — från idé och koncept till färdig, marknadsanpassad produkt.',
          en: 'End-to-end support from concept creation and formulation to market-ready products.',
        },
      },
      {
        title: { sv: 'Innovationsledning', en: 'Innovation Management' },
        description: {
          sv: 'Vi strukturerar innovationsprocesser som omvandlar idéer till kommersiellt framgångsrika produkter.',
          en: 'We establish structured innovation processes that transform ideas into commercial success.',
        },
      },
      {
        title: { sv: 'Processutveckling inom livsmedelsproduktion', en: 'Food Production Process Development' },
        description: {
          sv: 'Vi optimerar produktionsprocesser för kvalitet, livsmedelssäkerhet, resurseffektivitet och produktivitet.',
          en: 'We design and improve manufacturing processes for quality, food safety and resource efficiency.',
        },
      },
      {
        title: { sv: 'Kommersialisering av nya produkter', en: 'Commercialisation of Innovative Food Products' },
        description: {
          sv: 'Vi utvecklar affärsmodeller, marknadsstrategier och lanseringsplaner för framgångsrik introduktion.',
          en: 'We develop business models, market entry strategies and launch plans for successful commercialisation.',
        },
      },
      {
        title: { sv: 'Marknadsvalidering & kundtester', en: 'Market Validation & Consumer Testing' },
        description: {
          sv: 'Vi genomför marknadsanalyser och produkttester för att säkerställa att produkten möter kundernas behov.',
          en: 'We conduct research and consumer testing to validate demand before full-scale production.',
        },
      },
      {
        title: { sv: 'Pilotproduktion', en: 'Pilot Production' },
        description: {
          sv: 'Vi planerar och genomför pilotproduktion för att testa produkt, process och metodik i mindre skala.',
          en: 'We plan and oversee pilot-scale production to validate products and processes before scale-up.',
        },
      },
      {
        title: { sv: 'Livsmedelssäkerhet & kvalitet', en: 'Food Safety & Quality Assurance' },
        description: {
          sv: 'Rådgivning för att säkerställa att produkter uppfyller lagstiftning, kvalitetskrav och konsumenternas förväntningar.',
          en: 'Expert consultancy to ensure compliance, quality and consumer confidence.',
        },
      },
      {
        title: { sv: 'Hållbara livsmedelssystem', en: 'Sustainable Food Systems' },
        description: {
          sv: 'Vi hjälper företag integrera cirkulära affärsmodeller och resurseffektivitet i hela värdekedjan.',
          en: 'We integrate circular principles and resource efficiency throughout the value chain.',
        },
      },
      {
        title: { sv: 'Samarbete med forskningsinstitut & universitet', en: 'Research & University Collaboration' },
        description: {
          sv: 'Vi bygger broar mellan näringsliv och forskning genom gemensamma innovationsprojekt.',
          en: 'We facilitate strategic partnerships between industry, universities and research institutes.',
        },
      },
      {
        title: { sv: 'Forsknings- & innovationsfinansiering', en: 'Research & Innovation Funding' },
        description: {
          sv: 'Vi hjälper företag identifiera och ansöka om nationella och internationella utvecklingsbidrag.',
          en: 'We help secure national and international funding for research and innovation projects.',
        },
      },
    ],
    closing: {
      sv: 'Vi erbjuder ett helhetsstöd genom hela innovationsresan — från den första idén och produktutvecklingen till pilotproduktion, marknadsvalidering och kommersialisering. Genom att kombinera teknisk kompetens, affärsutveckling och hållbarhetsfokus hjälper vi våra kunder att utveckla framtidens livsmedelslösningar.',
      en: 'We provide comprehensive support throughout the innovation lifecycle — from concept and product design to pilot production, validation, commercialisation and growth. By combining scientific knowledge, strategic consultancy and a commitment to sustainability, we help clients create the next generation of food products.',
    },
  },

  {
    slug: 'funding-partnerships',
    color: 'navy',
    icon: 'handshake',
    name: { sv: 'Finansiering, Partnerskap & Affärsstöd', en: 'Funding, Partnerships & Business Support' },
    short: {
      sv: 'Säkra finansiering, bygg partnerskap och få tillgång till rätt nätverk.',
      en: 'Secure funding, build partnerships and access the right networks.',
    },
    intro: {
      sv: 'Att förverkliga innovativa idéer kräver mer än strategi — det kräver tillgång till finansiering, rätt samarbetspartners och praktiskt stöd. Vi hjälper företag och organisationer att navigera innovationssystemet genom att identifiera finansieringsmöjligheter, etablera strategiska samarbeten och skapa kontakt med experter, teknikleverantörer och maskintillverkare.',
      en: 'Turning innovative ideas into successful businesses requires more than strategy — it requires access to funding, the right partners and practical support. We help organisations navigate the innovation ecosystem by securing funding, building strategic partnerships and connecting clients with industry experts, technology providers and equipment manufacturers.',
    },
    subservices: [
      {
        title: { sv: 'Finansiering & bidragsansökningar', en: 'Grant Funding & Financial Support' },
        description: {
          sv: 'Vi identifierar relevanta finansieringsmöjligheter och stödjer genom hela ansökningsprocessen — från idé till färdig ansökan.',
          en: 'We identify suitable funding opportunities and guide clients through the entire application process.',
        },
      },
      {
        title: { sv: 'Strategiska partnerskap', en: 'Strategic Partnerships' },
        description: {
          sv: 'Vi etablerar samarbeten med universitet, forskningsinstitut, investerare och branschpartners.',
          en: 'We build collaborations with universities, research institutes, investors and industry partners.',
        },
      },
      {
        title: { sv: 'Leverantörer & teknikpartners', en: 'Supplier & Technology Partner Identification' },
        description: {
          sv: 'Vi utvärderar och förmedlar kontakt med pålitliga leverantörer, teknikföretag och specialiserade tjänsteleverantörer.',
          en: 'We identify, evaluate and connect clients with reliable suppliers and technology providers.',
        },
      },
      {
        title: { sv: 'Produktionsutrustning & tillverkningslösningar', en: 'Production Equipment & Manufacturing Solutions' },
        description: {
          sv: 'Vi förmedlar kontakt med etablerade maskintillverkare och teknikleverantörer i Sverige och internationellt.',
          en: 'We connect clients with reputable machinery manufacturers and technology providers worldwide.',
        },
      },
      {
        title: { sv: 'Vägledning i innovationssystemet', en: 'Innovation Ecosystem Navigation' },
        description: {
          sv: 'Vi skapar kontakt med inkubatorer, science parks, innovationskluster och offentliga stödaktörer.',
          en: 'We connect clients with incubators, innovation clusters, research bodies and public support programmes.',
        },
      },
      {
        title: { sv: 'Investeringsberedskap', en: 'Investment Readiness' },
        description: {
          sv: 'Vi stärker företagets investeringsberedskap genom affärsplaner, värdeerbjudanden och investerarpresentationer.',
          en: 'We strengthen investment readiness through refined business plans, value propositions and investor pitches.',
        },
      },
    ],
    closing: {
      sv: 'Utöver strategisk rådgivning arbetar vi aktivt med att koppla samman våra kunder med finansieringsmöjligheter, forskningsaktörer, leverantörer, teknikföretag och produktionspartners som kan bidra till att förverkliga innovativa idéer och skapa hållbara affärer.',
      en: 'Beyond strategic advice, we actively connect clients with funding opportunities, research partners, suppliers, technology providers and manufacturing experts who help transform innovative ideas into commercially successful ventures.',
    },
  },

  {
    slug: 'international-expansion',
    color: 'sky',
    icon: 'globe',
    name: { sv: 'Internationalisering & Marknadsexpansion', en: 'International Expansion & Market Development' },
    short: {
      sv: 'Etablera er på nya marknader med rätt strategi och starkt nätverk.',
      en: 'Enter new markets with the right strategy and a strong network.',
    },
    intro: {
      sv: 'Att etablera sig på en ny marknad kräver mer än ambition — det kräver rätt strategi, god marknadskännedom och tillgång till ett starkt affärsnätverk. Vi hjälper företag att expandera till nya nationella och internationella marknader genom att utveckla marknadsstrategier, identifiera affärsmöjligheter och skapa kontakt med kunder, distributörer och strategiska partners.',
      en: 'Expanding into new markets requires more than ambition — it requires local market knowledge, the right strategy and access to trusted business networks. We help businesses expand into new markets through market entry strategies, opportunity identification and connections with customers, distributors and strategic partners.',
    },
    subservices: [
      {
        title: { sv: 'Marknadsinträde & etableringsstrategi', en: 'Market Entry Strategy' },
        description: {
          sv: 'Vi analyserar marknadspotential, identifierar målgrupper och utvecklar marknadsstrategier som minskar riskerna.',
          en: 'We evaluate opportunities, identify target segments and develop entry strategies that minimise risk.',
        },
      },
      {
        title: { sv: 'Internationell affärsutveckling', en: 'International Business Development' },
        description: {
          sv: 'Vi identifierar nya affärsmöjligheter, etablerar strategiska samarbeten och bygger långsiktiga relationer.',
          en: 'We identify commercial opportunities, build partnerships and develop sustainable business relationships.',
        },
      },
      {
        title: { sv: 'Kund- & partneridentifiering', en: 'Customer Identification & Business Matching' },
        description: {
          sv: 'Vi identifierar potentiella kunder, distributörer, importörer och strategiska samarbetspartners.',
          en: 'We find the right customers, distributors, importers and strategic partners for your market.',
        },
      },
      {
        title: { sv: 'Kommersiell representation', en: 'Business Representation' },
        description: {
          sv: 'Vi kan representera utvalda företag och presentera deras produkter och tjänster på nya marknader.',
          en: 'We act as a trusted local representative — introducing your products and services to new markets.',
        },
      },
      {
        title: { sv: 'Marknadsföring av produkter & tjänster', en: 'Product & Service Promotion' },
        description: {
          sv: 'Vi stödjer marknadspositionering genom riktad affärsutveckling, nätverkande och kundmöten.',
          en: 'We promote your offerings through targeted business development and strategic networking.',
        },
      },
      {
        title: { sv: 'Strategiska internationella samarbeten', en: 'International Partnerships' },
        description: {
          sv: 'Vi etablerar partnerskap med företag, universitet, investerare och offentliga organisationer.',
          en: 'We build collaborations with companies, universities, investors and public organisations.',
        },
      },
      {
        title: { sv: 'Förberedelse inför internationalisering', en: 'Export Readiness' },
        description: {
          sv: 'Vi utvärderar företagets beredskap för internationell expansion — affärsmodell, resurser och regelverk.',
          en: 'We assess export readiness across business model, capacity, regulation and market positioning.',
        },
      },
      {
        title: { sv: 'Strategiska kommersiella partnerskap', en: 'Strategic Commercial Partnerships' },
        description: {
          sv: 'Vi erbjuder exklusiv marknadsrepresentation för utvalda innovativa produkter och tjänster.',
          en: 'We offer exclusive market representation for selected innovative products and services.',
        },
      },
    ],
    closing: {
      sv: 'Vi öppnar dörrar till nya marknader. Utöver strategisk rådgivning hjälper vi aktivt våra kunder att etablera värdefulla affärskontakter, identifiera nya marknadsmöjligheter och utveckla långsiktiga samarbeten som stärker deras konkurrenskraft.',
      en: 'We open doors to new markets. Beyond strategy, we actively help clients establish valuable business connections, identify commercial opportunities and strengthen their presence in new markets.',
    },
  },

  {
    slug: 'executive-education',
    color: 'navy',
    icon: 'cap',
    name: { sv: 'Utbildning, Föreläsningar & Kompetensutveckling', en: 'Executive Education & Professional Development' },
    short: {
      sv: 'Stärk kunskap och kompetens genom skräddarsydda utbildningar och workshops.',
      en: 'Build knowledge and capability through tailored education and workshops.',
    },
    intro: {
      sv: 'Vi erbjuder utbildningar, föreläsningar och workshops som stärker kunskap, utvecklar kompetens och ger företag praktiska verktyg för att möta framtidens utmaningar. Våra utbildningar kombinerar forskning, praktisk erfarenhet och interaktiva metoder för att skapa långsiktigt värde.',
      en: 'We design and deliver executive education programmes, keynote presentations and interactive workshops that equip organisations with the knowledge, skills and practical tools required to succeed in a dynamic and competitive world.',
    },
    subservices: [
      {
        title: { sv: 'Föreläsningar om innovation', en: 'Innovation Keynotes & Executive Seminars' },
        description: {
          sv: 'Inspiration och strategiska insikter om innovation, kreativitet och förändringsarbete.',
          en: 'Inspiring keynotes on innovation, emerging trends and organisational transformation.',
        },
      },
      {
        title: { sv: 'Workshops inom affärsutveckling', en: 'Business Development Workshops' },
        description: {
          sv: 'Praktiska verktyg för att utveckla affärsidéer, identifiera möjligheter och stärka konkurrenskraften.',
          en: 'Practical frameworks to identify growth opportunities and strengthen business models.',
        },
      },
      {
        title: { sv: 'Utbildningar inom hållbarhet', en: 'Sustainability Training' },
        description: {
          sv: 'Kunskap om ESG, Agenda 2030, cirkulär ekonomi och hållbart företagande.',
          en: 'Programmes covering ESG, the SDGs, circular economy and responsible business.',
        },
      },
      {
        title: { sv: 'Ledarskapsutbildningar', en: 'Leadership Development' },
        description: {
          sv: 'Stärk strategiskt ledarskap, förändringsledning, kommunikation och teamutveckling.',
          en: 'Strengthen strategic leadership, change management, communication and team development.',
        },
      },
      {
        title: { sv: 'Entreprenörskapsprogram', en: 'Entrepreneurship Programmes' },
        description: {
          sv: 'Mentorprogram för entreprenörer som vill förverkliga sina affärsidéer.',
          en: 'Mentor programmes for aspiring and established entrepreneurs.',
        },
      },
    ],
    closing: {
      sv: 'Vi tror att kunskap är en av de viktigaste drivkrafterna för innovation, tillväxt och hållbar utveckling. Genom våra utbildningar, föreläsningar och workshops hjälper vi våra kunder att omsätta ny kunskap i praktiska lösningar och hållbara resultat.',
      en: 'We believe continuous learning is the foundation of innovation, competitiveness and sustainable development. Our programmes transform knowledge into practical action and lasting organisational impact.',
    },
  },
];

export function getService(slug: string): ServicePillar | undefined {
  return services.find((s) => s.slug === slug);
}

export function t(obj: { sv: string; en: string }, locale: Locale): string {
  return obj[locale];
}
