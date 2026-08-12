/**
 * Career content, organized as eras rather than a flat list of engagements.
 *
 * The old flat timeline (every engagement, in order) still exists in
 * `timeline.ts` and is rendered behind the "full history" toggle. This file is
 * the curated layer: five eras, each with a narrative and a handful of
 * headline projects.
 */

export type EraId =
  | 'builder'
  | 'lead'
  | 'scale'
  | 'growth'
  | 'partner'
  | 'independent'

export interface Era {
  id: EraId
  /** Cohort / responsibility level, e.g. "Individual Contributor" */
  level: string
  /** Chapter title */
  title: string
  years: string
  /** Functional roles actually held during this era */
  roles: string[]
  /** 2–3 sentences. First person, plain. */
  narrative: string
  /** Short stat chips shown under the narrative */
  stats: { value: string; label: string }[]
}

export const DIALEXA_INTRO = "Start here if you want to know who I am and how I got here. This place made me, and I had the privilege of helping build it. I stumbled into this startup by accident, and it's been one of the most amazing, challenging, rewarding, and truly meaningful experiences of my life. The insanely intelligent, talented, passionate, joyous people that made who Dialexa was have taught me so much, made me who I am, and have become my family. I am nothing today without the knowledge, lessons, and time that these people poured into me over the years. We caught lightning in a bottle, and what an amazing ride it was. I've learned so much from this journey that it's impossible to sum up succinctly, but here are some highlights of what I've done:";

export const ERAS: Era[] = [
  {
    id: 'builder',
    level: 'Individual Contributor',
    title: 'Learning to Build',
    years: '2014 – 2016',
    roles: [
      'Intern Engineer',
      'Hardware Engineer',
      'Firmware Engineer',
      'Backend Engineer',
    ],
    narrative:
      "I initially applied to Dialexa for an electrical engineering position they needed to build a cloud-connected, Bluetooth, Wi-Fi, and LTE-enabled car device. And while I was rejected for the role due to still being in school, they offered me an unpaid internship learning to code instead. I started on the firmware for bluetooth connected devices, using my EE knowledge to work closely with the hardware team and assist as needed. A paid role eventually opened up for a full-time backend engineer, which I took to immediately, absorbing all I could about software systems and development. My hunger and insatiable curiosity led me to digging deeper and deeper until I understood how everything worked end-to-end, something I have carried with me ever since.",
    stats: [
      { value: 'Intern → FTE', label: 'in under a year' },
      { value: 'C / Node / iOS', label: 'firmware to frontend' },
    ],
  },
  {
    id: 'lead',
    level: 'Senior Engineer → Lead',
    title: 'Taking the Lead',
    years: '2016 – 2018',
    roles: [
      'Senior Backend Engineer',
      'Engineering Lead',
      'Mobile Engineer',
      'Sales Engineer',
    ],
    narrative:
      "I got my first end-to-end project lead role, where I learned how to assemble and lead teams, build client trust, and manage expectations. Over the course of many projects led, some of those lessons had to come the hard way, but I never made the same mistake twice. When I noticed an opportunity to assist our leadership with project estimation and business development, I volunteered to help, and learned and got good enough to ended up moving into sales full-time and writing the bizdev and estimation processes the company ran on for the next decade.",
    stats: [
      { value: 'First lead', label: 'end-to-end delivery' },
      { value: 'Sold + built', label: 'my own engagements' },
    ],
  },
  {
    id: 'scale',
    level: 'Lead → Manager / Architect',
    title: 'Scaling Delivery & People',
    years: '2019 – 2022',
    roles: [
      'Engineering Lead',
      'Architect',
      'Engagement Manager',
      'Manager',
    ],
    narrative:
      'As our business started to scale up, so did our projects. Pivoting back into engineering to help deliver again, led some of our biggest scoped projects and established and grew our key partnerships from PwC, BCG that were critical in helping scale our business. Through these I led 50+ person teams (mixed with client, partner, and our team members), internally managing a tree of 30 people, helped run and manage our engineering, estimation, and sales to directly influenced over $35M in revenue for our company.',
    stats: [
      { value: '47', label: 'person program led' },
      { value: '83', label: 'engineers onboarded' },
      { value: '29', label: 'person report tree' },
      { value: '0', label: 'projects to critical ops' },
    ],
  },
  {
    id: 'growth',
    level: 'Principal',
    title: 'Learning to Sell What I Built',
    years: '2023 – 2024',
    roles: [
      'Sales Enablement',
      'Client Partner',
      'Enterprise Architect',
      'Program Lead',
    ],
    narrative:
      "I was hand-picked to stand up our Sales Enablement org, which sat at the intersection of sales, delivery, marketing, and account management. I led or contributed to 75+ pursuits in a year, took the Client Partner role on multiple account, and carved out a niche for myself, being requested by name by BCG leadership to assist them in strategic engagements as an enterprise architect that would define, scope, and sell projects in the $100M range, which we would help deliver. My key to success in selling experience defining, designing, and delivering our work, which gave customers the trust in our ability to deliver well.",
    stats: [
      { value: '75+', label: 'pursuits led or supported' },
      { value: '$35M+', label: 'revenue influenced, to date' },
      { value: '$9M+', label: 'directly sold, to date' },
      { value: '4', label: 'new logos landed in a year' },
    ],
  },
  {
    id: 'partner',
    level: 'Partner',
    title: 'Owning the Whole Arc',
    years: '2025 – 2026',
    roles: [
      'Partner',
      'GTM Lead — Public',
      'Enterprise Architect',
      'Account Lead',
    ],
    narrative:
      "Having started as an unpaid intern at a startup with only 10 employees, having helped build this company over a decade to over 350 amazing employees delivering over $100M in revenue, I had my eyes set on one goal to accomplish before we transitioned from Dialexans to IBMers: Make it to Partner. I used all my experience so far and the work done delivering as an EA, my sales numbers, and my internal leadership work, and made my case. I made it. Putting a beautiful capstone on my time at this amazing company. After the IBM transition completed, I took the GTM Lead role for the Public industry — state and local government plus healthcare and life sciences, which was the bulk of what we sold and delivered. This role largely reflected the work I had been doing: Sales Enablement with some Enterprise Architecture on the side for strategic deals. The scope ran the full arc: first client meeting, initial architecture, planning and estimation, pitch and proposal, SOW, kickoff, and on some accounts all the way through closeout.",
    stats: [
      { value: '$15M+', label: 'sold in a single year' },
      { value: 'Partner', label: 'promotion earned' },
      { value: 'End to end', label: 'first meeting → closeout' },
    ],
  },
  {
    id: 'independent',
    level: 'Independent',
    title: 'On My Own Terms',
    years: '2026 +',
    roles: ['Fractional CTO', 'Enterprise Architect', 'Advisor', 'Builder'],
    narrative:
      "I made the difficult decision to leave in May 2026 to take some real time off to reassess, take on some new adventures I've not had time for, and just recover. But I've never been good at being idle and am always working on something, always keeping an eye out for the next thing. What I'm looking for now is work that's genuinely interesting, whatever the size or the industry. Have an idea? Hit me up.",
    stats: [],
  },
]

export type Industry =
  | 'healthcare'
  | 'mobility'
  | 'financial'
  | 'energy'
  | 'industrial'
  | 'retail'
  | 'media'
  | 'realestate'
  | 'consulting'
  | 'technology'

export const INDUSTRY_META: Record<Industry, { label: string }> = {
  healthcare: { label: 'Healthcare & Life Sciences' },
  mobility: { label: 'Mobility & Automotive' },
  financial: { label: 'Financial Services & Insurance' },
  energy: { label: 'Energy & Utilities' },
  industrial: { label: 'Industrial & Logistics' },
  retail: { label: 'Retail & Consumer' },
  media: { label: 'Media & Entertainment' },
  realestate: { label: 'Real Estate & Construction' },
  consulting: { label: 'Consulting & Partners' },
  technology: { label: 'Technology & Startups' },
}

export interface Project {
  id: string
  /** Client name as it should read on the card */
  client: string
  /** Logo slug in src/assets/logos, if one exists */
  logo?: string
  era: EraId
  years: string
  /** The role *I* played */
  role: string
  industry: Industry
  /** One line. What the project actually was. */
  headline: string
  /** The story — what I did and why it mattered. 2–4 sentences. */
  body: string
  /** Concrete outcomes. Keep these defensible. */
  impact: string[]
  /** Featured projects lead the era; the rest sit behind "more from this era" */
  featured: boolean
}

export const PROJECTS: Project[] = [
  // ─── Builder ──────────────────────────────────────────────────────────
  {
    id: 'vinli',
    client: 'Vinli',
    logo: 'vinli',
    era: 'builder',
    years: '2014 – 2016',
    role: 'Hardware & Firmware Engineer',
    industry: 'mobility',
    headline:
      'Connected-car platform — firmware for the entire MVP device, from CAN bus to phone.',
    body: "I wrote the firmware for all of the MVP device's functionality, pulling vehicle data off the CAN bus and talking to the mobile app over Bluetooth. Leaning on my electrical engineering background, I also helped hand-solder and populate the gen-1 boards ahead of our launch at TechCrunch. After the company spun off, its founder asked me back to build crash-detection firmware.",
    impact: [
      'Shipped device firmware for the TechCrunch launch',
      'Hand-assembled gen-1 hardware alongside the EE team',
      'Spun out of Dialexa Labs into a standalone company',
    ],
    featured: true,
  },
  {
    id: 'parkhub',
    client: 'ParkHub',
    logo: 'parkhub',
    era: 'builder',
    years: '2014 – 2017',
    role: 'Backend Engineer → Project Lead',
    industry: 'mobility',
    headline:
      'Parking and event commerce platform — my first full-time engagement, and my first lead role.',
    body: 'I started as a backend engineer. As the team and the scope grew, so did my responsibilities and my relationships with the client, until I took over the project lead position. On the side, I rewrote every part of ParkHub\'s frontend on my own time — not to ship it, but so I could understand the product end to end, from infrastructure deployment through the UI.',
    impact: [
      'Grew from backend IC to project lead on the same account',
      'Rebuilt the full frontend independently to learn the whole stack',
      'Multi-year account, active across four calendar years',
    ],
    featured: true,
  },
  // ─── Lead ─────────────────────────────────────────────────────────────
  {
    id: 'sml',
    client: 'SML',
    logo: 'sml',
    era: 'lead',
    years: '2016',
    role: 'Engineering Lead',
    industry: 'retail',
    headline:
      'Retail labeling and RFID — my first end-to-end lead role, at 25% allocation.',
    body: "My first time leading a project end to end, while only allocated a quarter of my time to it. We had delivery issues and I learned a great deal the hard way, but I led the team to deliver the full scope on time against some genuinely unrealistic constraints. After the engagement closed, I personally resolved every issue the client raised over a single weekend — proving out the quality of what the team had built.",
    impact: [
      'Full scope delivered on time at 25% allocation',
      'Every post-delivery client issue closed out personally',
      'The engagement that taught me trust and expectation management',
    ],
    featured: true,
  },
  {
    id: 'mizzen-main',
    client: 'Mizzen+Main',
    logo: 'mizzen-main',
    era: 'lead',
    years: '2017',
    role: 'Sales Engineer & Lead',
    industry: 'retail',
    headline:
      'Performance menswear brand — the first engagement I scoped, sold, and delivered myself.',
    body: 'I took the lead independently: reshaped the scope with the client (the original would have violated marketing regulations), estimated it, pitched it, sold it, and then led execution, launch, and transition to the client. Start to finish, I took full ownership.',
    impact: [
      'First engagement sold and delivered solo',
      'Reworked scope to clear a regulatory problem before it became one',
    ],
    featured: true,
  },
  {
    id: 'pwc-att',
    client: 'PwC × AT&T',
    logo: 'att',
    era: 'lead',
    years: '2018',
    role: 'Senior Frontend Engineer → Lead',
    industry: 'technology',
    headline:
      'Enterprise-scale telecom program — led the second wave and drove a frontend and middleware refactor.',
    body: 'I was brought on to lead the second wave of projects, focused on the frontend application. Beyond delivering the committed work, I established regular one-on-ones with the team and led a frontend and middleware refactor that landed significant improvements across a massive multi-hundred person program.',
    impact: [
      'Led the second delivery wave on an enterprise program',
      'Drove a cross-cutting frontend + middleware refactor',
    ],
    featured: true,
  },
  {
    id: 'cbre-360',
    client: 'CBRE',
    logo: 'cbre',
    era: 'lead',
    years: '2018',
    role: 'Senior Mobile Engineer',
    industry: 'realestate',
    headline:
      'CBRE 360 — indoor navigation and wayfinding in React Native.',
    body: 'I rolled onto an existing team and upskilled into a senior engineering position, using React Native to drive complex native mobile interactions for indoor navigation and wayfinding.',
    impact: ['Shipped native wayfinding features on a live product'],
    featured: false,
  },
  {
    id: 'title-coin',
    client: 'Title Coin',
    era: 'lead',
    years: '2018',
    role: 'Engineer (personal time)',
    industry: 'financial',
    headline:
      'Crypto proof-of-concept built after hours that became a go-to-market asset.',
    body: 'A colleague and I built Title Coin in our free time — a crypto proof of concept we used both as a go-to-market tool and as a way to build real experience with the technology. It played a role in winning the MoneyGram account.',
    impact: ['Contributed to landing the MoneyGram account'],
    featured: false,
  },

  // ─── Scale ────────────────────────────────────────────────────────────
  {
    id: 'pwc-boardingpass',
    client: 'PwC',
    logo: 'pwc',
    era: 'scale',
    years: '2019',
    role: 'Engineering Lead',
    industry: 'consulting',
    headline:
      'BoardingPass — the first engagement of a new PwC partnership, and the proving ground for practices we still use.',
    body: 'I led engineering on the first project of our PwC partnership, which meant the relationship was riding on it. I onboarded and upskilled several engineers who went on to be some of our strongest, and piloted a set of ideas that became standard company practice: sprint demos, demo templates, story kickoffs, focus factor, and our development patterns for TypeScript, repositories, and GraphQL.',
    impact: [
      'First delivery of a new strategic partnership',
      'Piloted practices that became company-wide standards',
      'Onboarded and grew four engineers into senior contributors',
    ],
    featured: true,
  },
  {
    id: 'bcg-partnership',
    client: 'BCG Partnership',
    logo: 'bcg',
    era: 'scale',
    years: '2020',
    role: 'Engineering Lead',
    industry: 'consulting',
    headline:
      'The engagement that made a BCG partnership real — and our first staff-aug and travel model.',
    body: "I played a critical role in building trust with a brand-new BCG partnership. I helped lead the travel team, building in-person trust with both BCG and the end client, and helped build and refine our first staff-augmentation and travel model, which turned out to be central to the success of our partnership. I also piloted weekly team check-ins and team co-creation of the ops reports, so people felt heard and saw real action taken on what they raised. The relationships built here are still paying off.",
    impact: [
      'Established the delivery model for a partnership that ran for years',
      'Piloted team check-ins and co-created ops reporting',
      'Built BCG relationships that generate inbound requests to this day',
    ],
    featured: true,
  },
  {
    id: 'intermountain',
    client: 'Intermountain Health',
    logo: 'intermountain',
    era: 'scale',
    years: '2020 – 2022',
    role: 'Architect → Engagement Lead',
    industry: 'healthcare',
    headline:
      'MyHealth+ — spotted the opening to convert a sub-contract into a direct client, then led a $2M+ re-architecture across 50+ people.',
    body: "Through relationships built during the BCG work, I saw an opening to convert Intermountain into a standalone client, and did. That led directly to a request to re-architect the platform we had just built so it could meet new business objectives — and then to a $2M+ build phase once funding cleared. I led both the Dialexa team and Intermountain's internal MyHealth+ team, and was able to build a flexible, EHR-agnostic architecture to enable future acquisitions they had on their roadmap.",
    impact: [
      'Converted a sub-contracted role into a direct client relationship',
      '$2M+ build phase sold and delivered',
      '47-person combined client + consultant team led',
      'Architecture stayed EHR-agnostic through planned acquisitions',
      'Standing offer from client stakeholders to join their leadership team',
    ],
    featured: true,
  },
  {
    id: 'john-deere',
    client: 'John Deere',
    logo: 'john-deere',
    era: 'scale',
    years: '2021',
    role: 'Engineering Lead → Senior Engineer',
    industry: 'industrial',
    headline:
      'Lonestar — connected labor experiments, and handing my own lead role to someone ready for it.',
    body: "I came on as engineering lead and helped set up experiments to test product hypotheses around connected labor. Once I saw the opportunity — and the skill and drive of a colleague already on the account — I worked with him and the client to transition my lead role over to him, and stepped back into senior engineer to support him through his first software project lead. He knocked it out of the park.",
    impact: [
      'Ran product experiments validating connected-labor hypotheses',
      'Deliberately handed off my lead role to grow someone into it',
    ],
    featured: true,
  },
  {
    id: 'flexdrive',
    client: 'Flexdrive',
    logo: 'flexdrive',
    era: 'scale',
    years: '2019',
    role: 'Architect',
    industry: 'mobility',
    headline:
      'Car subscription platform — initial architecture and the CI/CD foundation.',
    body: 'I was the architect at the start of the engagement, building out initial development, CI/CD pipelines, and the groundwork the delivery team rolled onto.',
    impact: ['Set the architecture and delivery pipeline the team built on'],
    featured: false,
  },

  // ─── Growth ───────────────────────────────────────────────────────────
  {
    id: 'bcg-becton-dickinson',
    client: 'BCG × Becton Dickinson',
    logo: 'becton-dickinson',
    era: 'growth',
    years: '2023',
    role: 'Enterprise Architect',
    industry: 'healthcare',
    headline:
      'Sole engineering voice on a BCG Classic + Platinion team — current-state assessment through future-state architecture.',
    body: 'I was the only Dialexa resource on a joint BCG Classic and Platinion team, playing architect. I proved out current-state assessment, future-state architecture, asset creation, and selling skills directly alongside BCG, and turned a senior technical client stakeholder who doubted BCG could execute into an advocate for us leading the work.',
    impact: [
      'Only engineering resource on a blended strategy team',
      'Converted a skeptical technical stakeholder into a project advocate',
    ],
    featured: true,
  },
  {
    id: 'bcg-varian',
    client: 'BCG × Varian',
    logo: 'varian',
    era: 'growth',
    years: '2024',
    role: 'Enterprise Architect, Pursuit Team',
    industry: 'healthcare',
    headline:
      'Radiation oncology transformation — requested by name to architect a pursuit projected at ~$100M.',
    body: "BCG leadership asked for me by name. At 50% allocation I ran a rapid current-state assessment of Varian's apps, services, infrastructure, and DevOps, built them a north-star architecture, ran technical interviews with their senior executives, assisted on data and cyber assessment, and did the roadmapping, estimation, and team sizing.",
    impact: [
      'Owned 4 layers of BCG’s delivery framework on the pursuit',
      'Built the north-star architecture from executive interviews',
      '~$100M projected transformation, with us positioned as delivery partner',
    ],
    featured: true,
  },
  {
    id: 'fnti',
    client: 'FNTI',
    logo: 'fnti',
    era: 'growth',
    years: '2023 – 2025',
    role: 'Pursuit Lead → Client Partner',
    industry: 'financial',
    headline:
      'Title insurance modernization — won a competitive bid, then converted $400k into $2.3M+.',
    body: "Taking a website lead and working directly with their entire C-suite, I built trust telling real stories from work we had actually built and won the competitive bid against another consulting firm. I then took the Client Partner role, guided the team through the first phase, smoothed over the bumps using the trust I'd built on both sides, and converted the engagement into a build phase worth over $2.3M. They had no real in-house technology team, so the work was as much about transforming how the business ran and streamlining their pipeline as it was about software.",
    impact: [
      'Won a competitive bid against another consultancy',
      '$400k initial phase → $2.3M+ build phase',
      'Transformed core business operations for a client with no in-house tech team',
      '"We were worried the other guys were going to just be consultants, but we knew that you could actually build it" — client',
    ],
    featured: true,
  },
  {
    id: 'sales-enablement',
    client: 'Sales Enablement',
    era: 'growth',
    years: '2023 – 2025',
    role: 'Sales Enablement Lead',
    industry: 'consulting',
    headline:
      'Hand-picked to stand up a new org sitting between sales, delivery, marketing, and accounts.',
    body: 'I led or contributed to 75+ pursuits in a year — running information gathering, solutioning, estimating, internal approvals, proposal creation, and client pitching. I rebuilt the case study inventory and its creation and approval process, and created an internal asset library that took deck-building from hours or days down to minutes.',
    impact: [
      '75+ pursuits led or supported in a single year',
      'New logos landed including BNSF, GRABtv, FNTI, and Honda Japan',
      'Built the internal asset library the growth team runs on',
    ],
    featured: true,
  },
  {
    id: 'bcg-ascension',
    client: 'BCG × Ascension',
    logo: 'ascension',
    era: 'growth',
    years: '2023',
    role: 'Architect',
    industry: 'healthcare',
    headline:
      'Event and notification architecture for a national health system.',
    body: 'Asked for by name by BCG leadership to architect their event and notification system.',
    impact: ['Requested by name by partner leadership'],
    featured: false,
  },
  {
    id: 'ibm-integration',
    client: 'IBM',
    logo: 'ibm',
    era: 'growth',
    years: '2023 – 2025',
    role: 'Integration Lead & Solution Architect',
    industry: 'consulting',
    headline:
      'Representing a 300-person product engineering practice inside a 300,000-person company.',
    body: "I was one of the first people partnering with IBM to figure out how we positioned ourselves and brought a genuinely different perspective to some of their largest and oldest accounts. I was asked by name to fly out and lead their response to a major vendor-selection process — which we won, positioning IBM for years of follow-on work. I also was the first to being refining our process to work within IBM's existing complex, multi-layer, approval-process team which was tricky to reconcile our fast, flexible approach with their slower, risk-averse posture. We found a happy medium.",
    impact: [
      'Won a competitive vendor-selection process for a major utility account',
      'Represented the practice at State Farm, BNSF, Shell, Jiffy Lube, and Honda',
      'Co-designed the merged solutioning and approval process',
    ],
    featured: true,
  },
  {
    id: 'topics',
    client: 'Topics Program',
    era: 'growth',
    years: '2024 – 2025',
    role: 'Program Lead',
    industry: 'consulting',
    headline:
      'Unanimously selected to lead a top company objective — turning practitioner expertise into sellable thought leadership.',
    body: "I defined the topics, built their commercialization plans, appointed and managed topic leaders, and guided go-to-market asset creation. It shipped, though honestly not every topic paid off equally: the AI topic was the one that really landed, and the AWS topic generated a number of pipeline leads.",
    impact: [
      'Unanimously selected to lead a top-level company objective',
      'AI topic created ~20% developer productivity gain across our delivery teams, though those metrics can be genuinely hard to quantify',
      'AWS topic drove real lead volume',
    ],
    featured: false,
  },

  // ─── Partner ──────────────────────────────────────────────────────────
  {
    id: 'mayo-clinic',
    client: 'Mayo Clinic',
    logo: 'mayo-clinic',
    era: 'partner',
    years: '2025',
    role: 'Enterprise Architect',
    industry: 'healthcare',
    headline:
      'Enterprise architecture across seven future-facing initiatives — then built the hardest one.',
    body: "I helped one of the most respected health systems in the world figure out how to bring modern technology, AI very much included, into seven major initiatives, fighting conflicting needs from their board and C-Suite to their technical leads - Be as ambitious as possible the future while staying honest about where the tech is and what could actually be delivered. That work then resulted in a deeper dive into one of those areas for a patient record searching platform that could do what Google themselves couldn't provide: a state-of-the-art document processing pipeline and a tunable patient-record search platform that doctors actually approved of. The other initiatives we explored included defining the architecture for a longitudinal patient record, a patient portal, a research platform, and emergency efficiency — using technology to predict and preemptively act on inpatient emergency response.",
    impact: [
      'Architected 7 major future-facing initiatives',
      'Built a document processing pipeline and tunable patient-record search platform',
      'Shaped a realistic, ambitious path for AI adoption in a highly regulated setting',
    ],
    featured: true,
  },
  {
    id: 'agilent',
    client: 'Agilent',
    logo: 'agilent',
    era: 'partner',
    years: '2025',
    role: 'Enterprise Architect',
    industry: 'healthcare',
    headline:
      "Identified existing innovation that was siloed and devised a platform to unify it",
    body: "Their instruments were islands: fully on-premise in customer environments, running on constrained hardware, sprawling across versions, tightly coupled to regulated software, and unable to share data or reuse technology between products. I helped identify the unifying patterns, and existing innovation that needed to be upleveled and leveraged and made the case for a unified product platform underneath all of it. From there we went deep on the architecture, began the actual build process, and mapped out where AI could realistically compress the timeline with returns worth the investment.",
    impact: [
      'Identified and made the case for a unified cross-instrument product platform',
      'Took it from enterprise assessment through architecture into active build',
      'Defined an AI adoption path with defensible ROI in a regulated hardware context',
    ],
    featured: true,
  }
]

/** Projects for an era, featured first. */
export function projectsForEra(era: EraId): Project[] {
  return PROJECTS.filter((p) => p.era === era).sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  )
}
