export type TimelineCategory = 'billable' | 'labs' | 'internal' | 'sales'

export interface TimelineEntry {
  id: string
  year: number
  title: string
  category: TimelineCategory
  summary: string
  detail: string
}

export const CATEGORY_META: Record<
  TimelineCategory,
  { label: string; color: string }
> = {
  billable: { label: 'Billable Engagement', color: 'var(--cat-billable)' },
  labs: { label: 'Dialexa Labs', color: 'var(--cat-labs)' },
  internal: { label: 'Internal Initiative', color: 'var(--cat-internal)' },
  sales: { label: 'Sales & Growth', color: 'var(--cat-sales)' },
}

export const TIMELINE: TimelineEntry[] = [
  {
    id: 'vinli-2014',
    year: 2014,
    title: 'Vinli — joined as intern',
    category: 'billable',
    summary: 'Rejected for an EE role, brought on as an unpaid intern doing firmware.',
    detail:
      'Applied for an Electrical Engineering position for Vinli but was still in school so I was rejected for the job, but brought on as an unpaid intern to do some firmware work instead.',
  },
  {
    id: 'remind-2014',
    year: 2014,
    title: 'Remind',
    category: 'billable',
    summary: 'Breadboard prototype + custom firmware for a bluetooth-enabled spy pillbox.',
    detail:
      "Created a breadboard prototype for a bluetooth-enabled spy pillbox and wrote firmware for the device using the device's custom C-flavored firmware.",
  },
  {
    id: 'silver-2014',
    year: 2014,
    title: 'Silver',
    category: 'billable',
    summary: 'Light iOS development just before ApplePay launched.',
    detail:
      'Jumped in at the tail end of this engagement right before ApplePay came out, but I did jump in and assist with some light iOS development.',
  },
  {
    id: 'parkhub-hired-2014',
    year: 2014,
    title: 'Hired as FTE',
    category: 'billable',
    summary: 'Hired full-time to do backend development for ParkHub.',
    detail:
      'Hired as FTE to do backend development for ParkHub. See below for more details.',
  },
  {
    id: 'parkhub-2015',
    year: 2015,
    title: 'ParkHub',
    category: 'billable',
    summary:
      'First Dialexa FTE project — backend engineer who grew into project lead and rewrote the front end on the side.',
    detail:
      "My first project with Dialexa as an FTE where I started as a backend engineer. As the team and scope of the project grew, so did my responsibilities and relationships with the client until I was able to take over the project lead position from Samer. Aside from delivering, I pushed myself to expand my skillset and created a side project where I re-wrote every part of ParkHub's frontend so that I could fully understand how it worked from the deployment of infrastructure to the front end development.",
  },
  {
    id: 'vinli-2016',
    year: 2016,
    title: 'Vinli — MVP firmware',
    category: 'labs',
    summary:
      'Wrote firmware for the entire MVP device (CAN bus + bluetooth) and helped solder boards for the TechCrunch launch.',
    detail:
      'Wrote the firmware for all of the MVP device functionality pulling all data from the CAN bus and communicating via bluetooth to the mobile app. I also leveraged my background in Electrical Engineering to assist Romeo in soldering and board assembly in preparation for our launch at Tech Crunch. Post spin-off, I was asked by Mark Haidar to create additional firmware functionality for crash detection. Like all Dialexa Labs projects, this was all done in my personal time, along with the rest of the company at the time.',
  },
  {
    id: 'sml-2016',
    year: 2016,
    title: 'SML',
    category: 'billable',
    summary:
      'First end-to-end project lead role at 25% allocation; solo weekend rescue after delivery.',
    detail:
      'My first end-to-end project lead role, while only allocated 25%. Though we had some delivery issues, and many lessons were learned, I led the team to successfully deliver the full scope on time and with some fairly unrealistic obstacles to navigate. After the project had ended, I personally resolved each of the issues that the client request to be resolved over a weekend and proved the quality of what our team delivered with severe constraints.',
  },
  {
    id: 'robin-initial-2016',
    year: 2016,
    title: 'Robin — initial backend',
    category: 'labs',
    summary: 'Initial backend work in personal time for the lab launch.',
    detail:
      'I jumped in to do some initial backend work in my personal time for the initial launch of the lab.',
  },
  {
    id: 'robin-lead-2016',
    year: 2016,
    title: 'Robin — Engineering Lead',
    category: 'labs',
    summary:
      'Given formal allocation as Engineering Lead; oversaw releases adding real-time notifications.',
    detail:
      'I was later given some formal allocation on the project as Engineering Lead and oversaw multiple releases with new features and capabilities like real-time notifications.',
  },
  {
    id: 'sales-transition-2017',
    year: 2017,
    title: 'Sales — moved into Sales Engineering',
    category: 'sales',
    summary:
      "Took bizdev and estimation off Samer's plate, moved into sales full-time, and authored the templates still in use today.",
    detail:
      'When it was clear that Samer was overwhelmed with project estimation and bizdev pursuits, I volunteered to take some off his plate, slowly taking on more and more until I was asked to move into our sales or full time as a Sales Engineer. Here I took our informal processes and defined our current bizdev and estimate processes and templates that are still used today. (With some key enhancements that have been added by Greg, Marilou and others over the years since).',
  },
  {
    id: 'mizzen-main-2017',
    year: 2017,
    title: 'Mizzen+Main',
    category: 'sales',
    summary:
      'First independent SE engagement — scoped, estimated, pitched, sold, and led with intern Zach Howell.',
    detail:
      'During my time as a Sales Engineer, I independently took a lead from Scott Harper, collaborated with the client to manage the scope (since the original violated marketing regulations), estimated, pitched, sold and led the execution of this engagement alongside an intern, Zach Howell.',
  },
  {
    id: 'cbre-2018',
    year: 2018,
    title: 'CBRE 360',
    category: 'billable',
    summary:
      'Senior engineer leveraging React Native for indoor navigation and wayfinding.',
    detail:
      'I was rolled onto the existing team and upskilled to take on a senior engineer position leveraging react native for their CBRE 360 application which leveraged complex native mobile interactions to perform indoor navigation and wayfinding.',
  },
  {
    id: 'title-coin-2018',
    year: 2018,
    title: 'Title Coin',
    category: 'labs',
    summary:
      'Free-time crypto PoC with Mike McLaren that helped land the Moneygram account.',
    detail:
      'In my free time Mike McLaren and I built the crypto PoC, Title Coin, that we used as a go-to-market tool and a way to build our experiences working with crypto which eventually played a role in us winning the Moneygram account.',
  },
  {
    id: 'pwc-att-2018',
    year: 2018,
    title: 'PwC × AT&T',
    category: 'billable',
    summary:
      'Led the second wave under Ted; pushed a major frontend + middleware refactor before the project was canceled.',
    detail:
      "I was brought on to lead the second wave of projects under Ted, focusing on the front end application. Aside from delivering our work, I established regular 1-1's with the team and led the frontend and middleware refactor work which implemented huge improvements throughout the massive project that had just gained approval and momentum before the project was canceled.",
  },
  {
    id: 'engage-2018',
    year: 2018,
    title: 'Engage',
    category: 'labs',
    summary: 'Built the initial backend, database, and pipelines after-hours.',
    detail:
      'I built the initial backend, database and pipelines while contributing to the informal Labs project via after hours work to get this idea launched.',
  },
  {
    id: 'cloud-certs-2019',
    year: 2019,
    title: 'AWS Partner Certifications',
    category: 'internal',
    summary:
      'Co-led the AWS partner channel push with Brady Walker — earning two AWS certifications.',
    detail:
      'Along with Brady Walker, I led the first obtaining of our cloud provider certifications and helped us meet the minimum requirements for the AWS partner channel with two AWS Certifications.',
  },
  {
    id: 'rosy-2019',
    year: 2019,
    title: 'Rosy',
    category: 'labs',
    summary: 'Initial mobile work for stories and videos.',
    detail: 'I did the initial mobile work for stories and videos.',
  },
  {
    id: 'flexdrive-2019',
    year: 2019,
    title: 'Flexdrive',
    category: 'billable',
    summary:
      'Architect at the start; built initial development, CI/CD pipelines, and laid the team groundwork.',
    detail:
      'I was an architect at the beginning of the engagement and built out the initial development, CI/CD pipelines, and laid the groundwork for the development team to roll on.',
  },
  {
    id: 'pwc-boardingpass-2019',
    year: 2019,
    title: 'PwC BoardingPass',
    category: 'billable',
    summary:
      'First project of the new PwC partnership — onboarded multiple Dialexans and piloted what became core practices.',
    detail:
      'Engineering Lead for the first project in our new PwC partnership. I built great client relationships, onboarded and upskilled multiple great Dialexans (Matthew Kuo, Brandon G, Grace J, Matt Tucker), piloted several new ideas which are now core Dialexa practices: sprint demos, demo templates, story kickoffs, focus factor, created & refined Dialexa development patterns for TS, repositories & GraphQL.',
  },
  {
    id: 'cohort-criteria-2020',
    year: 2020,
    title: 'Cohort Criteria',
    category: 'internal',
    summary:
      'Selected to redefine cohort criteria around clarity, flexibility, and transparency. Did not get implemented.',
    detail:
      'I was selected as a part of the group to redefine our cohort criteria which focused on clarity, flexibility and transparency. These efforts unfortunately did not get implemented.',
  },
  {
    id: 'bcg-intermountain-2020',
    year: 2020,
    title: 'BCG Intermountain',
    category: 'billable',
    summary:
      "Built trust with the new BCG partnership — piloted travel models, ops reports co-creation, and team check-ins.",
    detail:
      "I played a critical role in building trust with our new BCG partnership on the BCG Intermountain project. Alongside Tom Retelewski, I built deep trust and strong personal relationships with other BCGers that continue to pay off to this day. During this project I was also a major part of leading the travel team, piloting and making our first staff aug and travel models a success which was a critical aspect of the project's overall success. I also piloted our weekly team check-ins and the team co-creation of the Ops Reports to ensure the team felt heard and that real action was being taken to improve issues.",
  },
  {
    id: 'imh-myhealth-2020',
    year: 2020,
    title: 'Intermountain (IM6) — MyHealth+',
    category: 'sales',
    summary:
      "Through stakeholder relationships, turned a BCG sub-role into a standalone client.",
    detail:
      'Through the deep relationships built with Intermountain stakeholders, David Ferguson, and I realized an opportunity to get them to become a standalone client to extend his role for a few weeks during their transition period.',
  },
  {
    id: 'imh-rearchitecture-2020',
    year: 2020,
    title: 'Intermountain Health — Nevada Re-Architecture',
    category: 'billable',
    summary:
      'Standalone re-architecture request that led to securing a $2M+ build phase.',
    detail:
      'Our stand alone effort quickly came to fruition with a request for help rearchitecting the platform that we had just built with BCG to meet new business objectives. This later led to securing a $2M+ build phase once they were able to secure funding.',
  },
  {
    id: 'applied-cognition-2021',
    year: 2021,
    title: 'Applied Cognition',
    category: 'billable',
    summary:
      'Engagement Manager for a startup research/design project — delivered on time and on budget.',
    detail:
      'Engagement Manager for a research and design project for a startup, which was delivered on time and on budget with no issues.',
  },
  {
    id: 'stealth-puck-2021',
    year: 2021,
    title: 'Stealth Puck',
    category: 'billable',
    summary: 'Hardware & Firmware Engineer for Unisys Stealth Puck.',
    detail: 'Hardware & Firmware Engineer for Unisys Stealth Puck.',
  },
  {
    id: 'jd-lonestar-2021',
    year: 2021,
    title: 'JD Lonestar',
    category: 'billable',
    summary:
      'Initial engineering lead — set up matching experiments, then transitioned the role to Romeo as he grew into it.',
    detail:
      'Initially brought on as the engineering lead, where we helped set up some experiments to test some product hypothesis about connected labor. After realizing the matching opportunity, skillset and passion that he had, I worked with Romeo and the client to transition my Engineering Lead role over to him while I became the Senior Engineer and supported him taking on his first software project lead.',
  },
  {
    id: 'imh-refactor-2022',
    year: 2022,
    title: 'IMH Refactor',
    category: 'billable',
    summary:
      'Sold and led the $2M follow-on across a 47-person Dialexa + IMH team — kept architecture acquisition-agnostic.',
    detail:
      'After we sold the follow-on phase of $2M, I led both the Dialexa and massive IMH MyHealth+ internal team, totaling over 47 people, and successfully made their product work seamlessly while remaining agnostic to future acquisitions they had on their roadmap.',
  },
  {
    id: 'fsmb-2022',
    year: 2022,
    title: 'FSMB',
    category: 'sales',
    summary: 'On the initial pursuit team for the PDC Rewrite — TCV now over $5M.',
    detail:
      'I was on the initial pursuit team that acquired the client and sold the initial scope for the PDC Rewrite. Account TCV now over $5M.',
  },
  {
    id: 'dcp-2022',
    year: 2022,
    title: 'DCP',
    category: 'billable',
    summary:
      'Short, stressful, fun engagement — onboarded two interns (one converted to FTE) and trained offshore developers on a product I had just learned myself.',
    detail:
      'Led a very short, stressful, yet fun engagement, onboarding into an existing, complex project, upskilling two interns (One of which converted to FTE), successfully completing the work while training their offshore developers on how to deploy, maintain, and evolve the product that I had just learned myself.',
  },
  {
    id: 'thinkway-2022',
    year: 2022,
    title: 'Thinkway',
    category: 'billable',
    summary:
      "Single-architect resource doing current state analysis on scaling their architecture.",
    detail:
      'I was brought on as a single Architect resource to do some current state analysis on how to scale their current architecture to help them meet their expected future business needs.',
  },
  {
    id: 'eng-recruiting-2022',
    year: 2022,
    title: 'Engineering Recruiting & Staffing',
    category: 'internal',
    summary:
      'Co-led engineering recruiting and staffing alongside Matt Tucker and Joel Dykstra.',
    detail:
      'I was brought in by Andrew Turner to help co-lead the engineering recruiting and staffing efforts alongside Matt Tucker and Joel Dykstra, respectively.',
  },
  {
    id: 'eng-onboarding-2023',
    year: 2023,
    title: 'Engineering Onboarding',
    category: 'internal',
    summary:
      'Created the initial Engineering Onboarding process — personally onboarded 83 engineers before transitioning the program.',
    detail:
      'I created the initial Engineering Onboarding process, expanding and iterating on its content and personally onboarded 83 engineers until I transitioned to Scott Haley, Simba, and Matt Tucker.',
  },
  {
    id: 'bcg-ascension-2023',
    year: 2023,
    title: 'BCG Ascension',
    category: 'billable',
    summary:
      'Asked by name by BCG leadership to architect their event and notification system while BD waited to start.',
    detail:
      'Asked by name by BCG leadership to architect their event and notification system while BD was waiting to start.',
  },
  {
    id: 'bcg-bd-2023',
    year: 2023,
    title: 'BCG Becton Dickinson',
    category: 'billable',
    summary:
      "Sole Dialexa resource on a BCG Classic + Platinion team — earned the \"Ben is more of an Enterprise Architect\" quote from Tom Retelewski.",
    detail:
      'I was brought on as the only Dialexa resource on a BCG Classic + Platinion (now BCG X) team where I played the role of architect. Here I proved my current state assessment, future state architecture, asset creation, and selling skills to BCG. I also continued to build great relationships which showcased Dialexa\'s ability to help define and sell bigger pieces of work. On this engagement I earned quotes from BCG MDP Tom Retelewski such as: "Ben is more of an Enterprise Architect…" Tom continues to try to find ways to pull me into his engagements.',
  },
  {
    id: 'sales-enablement-2024',
    year: 2024,
    title: 'Sales Enablement',
    category: 'sales',
    summary:
      'Moved to Sales Enablement — led/participated in 75+ opportunities, added GrabTV, Shaddock/FNTI, BNSF, Shell.',
    detail:
      "At the start of 2023, I moved to our Sales Enablement org where I had even more direct impact on Dialexa's success. Later in this presentation you will see a section dedicated to the work I've done so far, and what I plan to do going forward. As a part of this new team, I led or participated in over 75 opportunities and added several new logos for Dialexa: GrabTV, Shaddock / FNTI, BNSF, [and Shell if it counts as standalone].",
  },
  {
    id: 'fnti-2024',
    year: 2024,
    title: 'FNTI',
    category: 'sales',
    summary:
      'Won the competitive bid on the $400k initial phase, then converted to a $2.3M+ build as Client Partner.',
    detail:
      'Specifically with FNTI, I was a key part of the pursuit team which sold the initial $400k phase and won the competitive bid. I then played the role of Client Partner and ensured not only the successful delivery of the current engagement, but also led the team to convert to a build phase of over $2.3M.',
  },
  {
    id: 'bcg-varian-2024',
    year: 2024,
    title: 'BCG Varian',
    category: 'sales',
    summary:
      "On the pursuit team as enterprise architect — owned 4 layers of BCG's DDP framework to shape the proposal for the next Ascension-scale project.",
    detail:
      "After persistently requesting Samer, Craig and Ellen about bringing me on to this various engagement, Tom Retelewski brought me on to their pursuit team as a 50% allocated resource. I helped the team perform a rapid current state assessment of Varian's product and platform vision, role of enterprise architect and owning 4 layers of their DDP framework which helped shape BCG's perspective, plan and proposal to win the build work that will hopefully become the next Ascension scale project.",
  },
  {
    id: 'topics-2024',
    year: 2024,
    title: 'Dialexa Topics',
    category: 'internal',
    summary:
      'Unanimously picked to lead one of the latest top company objectives — codifying thought leadership and commercializing it.',
    detail:
      'I was unanimously picked to lead one of our latest top company objectives, Dialexa Topics. I will cover this more in later sections, but with this program we will empower our delivery teams to help us codify thought leadership within these different topics, commercialize them to win more business and build up additional delivery expertise.',
  },
]
