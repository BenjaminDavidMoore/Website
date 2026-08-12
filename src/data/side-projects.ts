/**
 * Side projects — the things I build because I want to, not because someone
 * paid me to. Sourced from the actual repos rather than from memory.
 */

export type ProjectStatus = 'active' | 'shipped' | 'prototype' | 'todo' | 'shelved'

export const STATUS_META: Record<ProjectStatus, { label: string }> = {
  active: { label: 'In progress' },
  shipped: { label: 'Shipped' },
  prototype: { label: 'Prototype' },
  todo: { label: 'TODO' },
  shelved: { label: 'Shelved' },
}

export interface SideProject {
  id: string
  name: string
  /** One line. What it is, for someone who has never heard of it. */
  tagline: string
  status: ProjectStatus
  /** 2–4 sentences: the problem, the interesting part, why it exists. */
  body: string
  /** The part I find genuinely interesting — shown as a pull-quote. */
  hook?: string
  stack: string[]
  url?: string
  repo?: string
}

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: 'slate',
    name: 'Slate',
    tagline: 'One diagram. Every audience. Diagrams that tell stories.',
    status: 'active',
    body: "Every architecture gets re-represented and re-drawn over and over by all audiences, and as it does so it is immediately disconnected from the code it represents, quickly becoming stale. This project aims to unify the end-to-end architecture lifecycle into a single, intuitive product with diagrams that is directly tied to the codebase and can show and suppress detail so that every person from individual contributor to CEO can see what level of detail they need to understand, align with the plan, and do their job.",
    hook: 'Every role from Engineer to CEO can build, view, and share Documents that are beautiful, intuitive, designed to tell a story, and never get stale.',
    stack: ['Angular', 'WebGL', 'Node', 'Redis', 'PostgreSQL', 'GraphQL', 'Docker'],
  },
  {
    id: 'voxio',
    name: 'Voxio',
    tagline: 'Call Intelligence.',
    status: 'shipped',
    body: "Solving the issues of small to medium businesses who are great at what they do, but struggle to manage a portfolio of customers needs, phone calls and contact notes. It intercepts your business calls, records, transcribes and uses LLMs to analyze the result to pull out what actually mattered and keeping a summary of your call history. Next time they call, you'll receive a notification before answering to help remind you of key details, names, and action items. You can review and analyze past calls, recordings and customize your analysis and known entities like names and services so the tool learns the more it works.",
    hook: 'We take care of all the tedious work out of managing customers so that you can focus on what you do best: Delivering an amazing customer experience',
    stack: [
      'TypeScript',
      'Node / Express',
      'Socket.io',
      'BullMQ + Redis',
      'PostgreSQL',
      'AssemblyAI',
      'Claude / Gemini / GPT',
    ],
  },
  {
    id: 'binaural',
    name: 'Binaural',
    tagline: 'A frequency playground for binaural beats.',
    status: 'shipped',
    body: "Most binaural beats found online aren't actually using stereo audio, defeating the entire purpose of binaural audio. Built as a tool for my own exploration of the phenomenon, this PWA allows your to customize your frequency, waveform, and background audio to allow you to various types of Binaural frequencies while tying research backed findings into some of the most popular ones",
    hook: 'Explore the true binaural beats phenomenon while you meditate, rest, or just learn about this audio phenomenon',
    stack: ['Angular', 'Web Audio API', 'PWA'],
  },
  {
    id: 'kumiko',
    name: 'Kumiko Generator',
    tagline: 'CNC-ready SVGs for cutting out kumiko unibody panels.',
    status: 'shipped',
    body: 'Traditional kumiko is assembled from hundreds of hand-cut strips. I wanted to borrow this beautiful exploration of geometric tessellation and bring it into the world of CNC. This tool is meant to help create the SVG needed for CNC tools like the Shaper Origin for projects like mine for cabinet doors',
    hook: 'Easily play around with various traditional kumiko patterns, modify and customize them to your needs and then export a CNC-ready SVG that is already tailored to your bit size and radius',
    stack: ['Vanilla JS', 'Computational geometry', 'SVG'],
  },
  {
    id: 'email-client',
    name: 'E-Message',
    tagline: 'Email sucks. We can do better.',
    status: 'todo',
    body: "Email is one of our oldest tools that has was built on the tools of its time. But it's not going away anytime soon. But that doesn't mean it should still suck. We can do better. This project aims to build a better email client that gets rid of the fluff of traditional email clients and provides a Slack-like experience to your email.",
    hook: 'No more hard-to-read email chains, no more missed or buried messages, prioritize messages from people over businesses. Easily recognize Spam',
    stack: ['Electron'],
  },
]
