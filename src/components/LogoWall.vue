<script setup lang="ts">
import { computed, ref } from 'vue'
import { INDUSTRY_META, type Industry } from '@/data/career'
import { LOGOS, logoUrl } from '@/data/logos'

const activeIndustry = ref<Industry | 'all'>('all')

const industries = computed(() => {
  const counts = new Map<Industry, number>()
  for (const l of LOGOS) counts.set(l.industry, (counts.get(l.industry) ?? 0) + 1)
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([id, count]) => ({ id, count, label: INDUSTRY_META[id].label }))
})

/** Heaviest first so the wall reads as a real NASCAR hood, not a grid. */
const ordered = computed(() =>
  [...LOGOS].sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name)),
)

function isDimmed(industry: Industry): boolean {
  return activeIndustry.value !== 'all' && activeIndustry.value !== industry
}

const visibleCount = computed(() =>
  activeIndustry.value === 'all'
    ? LOGOS.length
    : LOGOS.filter((l) => l.industry === activeIndustry.value).length,
)
</script>

<template>
  <section class="wall">
    <header class="wall__header">
      <div>
        <h2 class="wall__title">Who I&rsquo;ve built for</h2>
        <p class="wall__lede">
          {{ LOGOS.length }} companies across a decade &mdash; startups through
          the Fortune 100, some as the direct partner, some alongside BCG
          or PwC.
        </p>
      </div>
    </header>

    <div class="filters" role="group" aria-label="Filter logos by industry">
      <button
        type="button"
        class="chip"
        :class="{ 'chip--active': activeIndustry === 'all' }"
        :aria-pressed="activeIndustry === 'all'"
        @click="activeIndustry = 'all'"
      >
        All <span class="chip__count">{{ LOGOS.length }}</span>
      </button>
      <button
        v-for="ind in industries"
        :key="ind.id"
        type="button"
        class="chip"
        :class="{ 'chip--active': activeIndustry === ind.id }"
        :aria-pressed="activeIndustry === ind.id"
        @click="activeIndustry = activeIndustry === ind.id ? 'all' : ind.id"
      >
        {{ ind.label }} <span class="chip__count">{{ ind.count }}</span>
      </button>
    </div>

    <ul class="grid">
      <li
        v-for="logo in ordered"
        :key="logo.slug"
        class="tile"
        :class="[
          `tile--w${logo.weight}`,
          {
            'tile--dim': isDimmed(logo.industry),
            'tile--color': logo.mono === false,
          },
        ]"
        :style="logo.scale ? { '--logo-scale': String(logo.scale) } : undefined"
      >
        <img
          :src="logoUrl(logo.slug)"
          :alt="logo.name"
          class="tile__img"
          loading="lazy"
          decoding="async"
        />
        <span class="tile__meta">
          <span class="tile__name">{{ logo.name }}</span>
          <span v-if="logo.via" class="tile__via">via {{ logo.via }}</span>
        </span>
      </li>
    </ul>

    <p class="wall__count" aria-live="polite">
      Showing {{ visibleCount }} of {{ LOGOS.length }}
    </p>
  </section>
</template>

<style scoped>
.wall {
  margin: 4rem 0;
  /* The hover badges are absolutely positioned and nowrap, so a wide company
     name on an edge tile would push the page horizontally. `clip` contains
     that without hiding the badges vertically the way `hidden` would. */
  overflow-x: clip;
}

.wall__header {
  margin-bottom: 1.5rem;
}

.wall__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin: 0 0 0.5rem;
  color: var(--color-text);
}

.wall__lede {
  margin: 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 42rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-muted);
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
}

.chip:hover,
.chip:focus-visible {
  color: var(--color-text);
  border-color: var(--color-tan);
}

.chip:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}

.chip--active {
  color: var(--color-bg-deep);
  background: var(--color-tan);
  border-color: var(--color-tan);
  font-weight: 600;
}

.chip__count {
  font-variant-numeric: tabular-nums;
  opacity: 0.65;
  font-size: 0.75em;
}

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.tile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  background: rgba(240, 230, 210, 0.03);
  transition:
    opacity 0.25s ease,
    filter 0.25s ease,
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

/* Sizing by weight — flagship engagements read largest. */
.tile--w4 { --logo-h: clamp(2.6rem, 5.5vw, 4rem); }
.tile--w3 { --logo-h: clamp(2rem, 4vw, 2.9rem); }
.tile--w2 { --logo-h: clamp(1.5rem, 3vw, 2.2rem); }
.tile--w1 { --logo-h: clamp(1.2rem, 2.4vw, 1.7rem); }

.tile__img {
  height: calc(var(--logo-h) * var(--logo-scale, 1));
  width: auto;
  max-width: min(16rem, 40vw);
  object-fit: contain;
  display: block;
  /* Every mark is normalised to the page's bone white so the wall reads as one
     system. Brand colors vary far too much to sit legibly on the forest
     background — several are dark navy or near-black. True color returns on
     hover. */
  filter: brightness(0) invert(1);
  opacity: 0.72;
  transition:
    filter 0.25s ease,
    opacity 0.25s ease;
}

.tile:hover {
  background: rgba(240, 230, 210, 0.07);
  border-color: var(--color-border);
  transform: translateY(-2px);
}

.tile:hover .tile__img {
  filter: none;
  opacity: 1;
}

/* Knockout marks keep brand color — the white filter would erase their
   cut-out lettering entirely. */
.tile--color .tile__img {
  filter: none;
  opacity: 0.9;
}

.tile--color:hover .tile__img {
  opacity: 1;
}

.tile--dim {
  opacity: 0.16;
  filter: saturate(0);
  pointer-events: none;
}

/* Name badge on hover */
.tile__meta {
  position: absolute;
  bottom: calc(100% - 0.25rem);
  left: 50%;
  transform: translate(-50%, 0.35rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 0.35rem 0.6rem;
  background: var(--color-bg-deep);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
  z-index: 2;
}

.tile:hover .tile__meta {
  opacity: 1;
  transform: translate(-50%, 0);
}

.tile__name {
  font-size: 0.75rem;
  color: var(--color-text);
  letter-spacing: 0.02em;
}

.tile__via {
  font-size: 0.65rem;
  color: var(--color-tan);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.wall__count {
  margin: 1.5rem 0 0;
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  letter-spacing: 0.06em;
}

@media (prefers-reduced-motion: reduce) {
  .tile,
  .tile__img,
  .tile__meta {
    transition: none;
  }
  .tile:hover {
    transform: none;
  }
}

@media (max-width: 640px) {
  .grid {
    gap: 0.5rem;
  }
  .tile {
    padding: 0.7rem 0.85rem;
  }
}
</style>
