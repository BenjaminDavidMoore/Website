import type { Industry } from './career'

/**
 * The logo wall.
 *
 * Every mark here is a company I actually did work for. `weight` drives tile
 * size and is a rough blend of how big the company is and how deep my
 * involvement went — flagship engagements sit largest.
 *
 * `via` marks work delivered through a partner rather than as a direct client,
 * because it would be dishonest to imply otherwise.
 */

export interface LogoEntry {
  slug: string
  name: string
  industry: Industry
  /** 4 = flagship, 1 = smaller engagement. Drives tile scale. */
  weight: 1 | 2 | 3 | 4
  /** Partner the work was delivered through, if not a direct client. */
  via?: string
  /** Optional: links the tile to a project card on the career page. */
  projectId?: string
  /**
   * Set false for knockout marks — logos whose lettering is *cut out* of a
   * colored shape rather than drawn on top of it. Forcing those to white
   * fills the shape solid and erases the text, so they keep brand color.
   */
  mono?: boolean
  /**
   * Height multiplier. Wide wordmarks read fine at a shared height, but
   * square or stacked lockups end up visually tiny next to them.
   */
  scale?: number
}

export const LOGOS: LogoEntry[] = [
  // ── Flagship ────────────────────────────────────────────────────────
  { slug: 'intermountain', name: 'Intermountain Health', industry: 'healthcare', weight: 4, projectId: 'intermountain' },
  { slug: 'bcg', name: 'Boston Consulting Group', industry: 'consulting', weight: 4, projectId: 'bcg-intermountain' },
  { slug: 'pwc', name: 'PwC', industry: 'consulting', weight: 4, projectId: 'pwc-boardingpass' },
  { slug: 'ibm', name: 'IBM', industry: 'consulting', weight: 4, projectId: 'ibm-integration' },
  { slug: 'john-deere', name: 'John Deere', industry: 'industrial', weight: 4, scale: 1.4, projectId: 'john-deere' },
  { slug: 'att', name: 'AT&T', industry: 'technology', weight: 4, via: 'PwC', projectId: 'pwc-att' },
  { slug: 'mayo-clinic', name: 'Mayo Clinic', industry: 'healthcare', weight: 4, scale: 1.9, projectId: 'mayo-clinic' },
  { slug: 'agilent', name: 'Agilent', industry: 'healthcare', weight: 4, projectId: 'agilent' },

  // ── Major ───────────────────────────────────────────────────────────
  { slug: 'cbre', name: 'CBRE', industry: 'realestate', weight: 3, projectId: 'cbre-360' },
  { slug: 'unisys', name: 'Unisys', industry: 'technology', weight: 3, projectId: 'unisys' },
  { slug: 'varian', name: 'Varian', industry: 'healthcare', weight: 3, via: 'BCG', projectId: 'bcg-varian' },
  // Knockout mark — the red starburst flattens to a blank disc when forced white.
  { slug: 'becton-dickinson', name: 'Becton Dickinson', industry: 'healthcare', weight: 3, mono: false, projectId: 'bcg-becton-dickinson' },
  { slug: 'ascension', name: 'Ascension', industry: 'healthcare', weight: 3, via: 'BCG', projectId: 'bcg-ascension' },
  { slug: 'fnti', name: 'First National Title Insurance', industry: 'financial', weight: 3, projectId: 'fnti' },
  { slug: 'parkhub', name: 'ParkHub', industry: 'mobility', weight: 3, projectId: 'parkhub' },
  { slug: 'vinli', name: 'Vinli', industry: 'mobility', weight: 3, projectId: 'vinli' },
  { slug: 'flexdrive', name: 'Flexdrive', industry: 'mobility', weight: 3, projectId: 'flexdrive' },
  { slug: 'fsmb', name: 'Federation of State Medical Boards', industry: 'healthcare', weight: 3, projectId: 'fsmb' },
  { slug: 'mizzen-main', name: 'Mizzen+Main', industry: 'retail', weight: 3, projectId: 'mizzen-main' },

  // ── Significant ─────────────────────────────────────────────────────
  { slug: 'shell', name: 'Shell', industry: 'energy', weight: 2, scale: 1.5 },
  { slug: 'bnsf', name: 'BNSF Railway', industry: 'industrial', weight: 2 },
  { slug: 'national-grid', name: 'National Grid', industry: 'energy', weight: 2 },
  { slug: 'state-farm', name: 'State Farm', industry: 'financial', weight: 2 },
  { slug: 'honda', name: 'Honda', industry: 'mobility', weight: 2 },
  { slug: 'jiffy-lube', name: 'Jiffy Lube', industry: 'mobility', weight: 2 },
  { slug: 'deloitte', name: 'Deloitte', industry: 'consulting', weight: 2 },
  { slug: 'aws', name: 'Amazon Web Services', industry: 'technology', weight: 2 },
  // Knockout mark — white "SML" cut out of a red arrow, so it keeps its color.
  { slug: 'sml', name: 'SML', industry: 'retail', weight: 2, mono: false, projectId: 'sml' },
  { slug: 'grabtv', name: 'GRABtv', industry: 'media', weight: 2 },
  { slug: 'moneygram', name: 'MoneyGram', industry: 'financial', weight: 2 },

  // ── Smaller ─────────────────────────────────────────────────────────
  { slug: 'thinkwhy', name: 'ThinkWhy', industry: 'technology', weight: 1, projectId: 'thinkwhy' },
  // Icon-only gradient mark — no wordmark asset exists, so it keeps its color.
  { slug: 'applied-cognition', name: 'Applied Cognition', industry: 'healthcare', weight: 1, mono: false, scale: 1.5, projectId: 'applied-cognition' },
  { slug: 'shaddock', name: 'Shaddock', industry: 'realestate', weight: 1, scale: 1.3 },
  { slug: 'altice', name: 'Altice', industry: 'media', weight: 1, via: 'BCG' },
]

/**
 * Vite resolves every logo asset at build time. Keyed by slug so the data
 * above stays free of import statements.
 */
const logoModules = import.meta.glob<string>(
  '../assets/logos/*.{svg,png}',
  { eager: true, import: 'default', query: '?url' },
)

const logoUrls: Record<string, string> = Object.fromEntries(
  Object.entries(logoModules).map(([path, url]) => [
    path.split('/').pop()!.replace(/\.(svg|png)$/, ''),
    url,
  ]),
)

export function logoUrl(slug: string): string | undefined {
  return logoUrls[slug]
}

const bySlug = new Map(LOGOS.map((l) => [l.slug, l]))

/** Height multiplier for square/stacked lockups. Applies anywhere a logo renders. */
export function logoScale(slug: string): number {
  return bySlug.get(slug)?.scale ?? 1
}

/** True when a logo must keep its brand color rather than being forced white. */
export function logoKeepsColor(slug: string): boolean {
  return bySlug.get(slug)?.mono === false
}

/** Industries that actually have logos, in wall order. */
export function industriesPresent(): Industry[] {
  const seen = new Set<Industry>()
  for (const l of LOGOS) seen.add(l.industry)
  return Array.from(seen)
}
