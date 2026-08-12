<script setup lang="ts">
import { ref } from 'vue'
import {
  ERAS,
  INDUSTRY_META,
  projectsForEra,
  type EraId,
  type Project,
} from '@/data/career'
import { logoKeepsColor, logoScale, logoUrl } from '@/data/logos'

/**
 * The independent era lives on its own tab with a full pitch, so it would only
 * render here as an empty stub.
 */
const chapters = ERAS.filter((e) => e.id !== 'independent')

/** Which eras have their non-featured projects expanded. */
const expanded = ref<Set<EraId>>(new Set())

function toggleEra(id: EraId) {
  const next = new Set(expanded.value)
  next.has(id) ? next.delete(id) : next.add(id)
  expanded.value = next
}

function featured(id: EraId): Project[] {
  return projectsForEra(id).filter((p) => p.featured)
}

function rest(id: EraId): Project[] {
  return projectsForEra(id).filter((p) => !p.featured)
}
</script>

<template>
  <div class="chapters">
    <article v-for="(era, i) in chapters" :key="era.id" class="era">
      <div class="era__rail" aria-hidden="true">
        <span class="era__dot" />
        <span v-if="i < chapters.length - 1" class="era__line" />
      </div>

      <div class="era__body">
        <header class="era__header">
          <p class="era__level">{{ era.level }}</p>
          <h3 class="era__title">{{ era.title }}</h3>
          <p class="era__years">{{ era.years }}</p>
        </header>

        <p class="era__narrative">{{ era.narrative }}</p>

        <ul v-if="era.roles.length" class="roles">
          <li v-for="role in era.roles" :key="role" class="roles__item">
            {{ role }}
          </li>
        </ul>

        <ul v-if="era.stats.length" class="stats">
          <li v-for="stat in era.stats" :key="stat.label" class="stats__item">
            <span class="stats__value">{{ stat.value }}</span>
            <span class="stats__label">{{ stat.label }}</span>
          </li>
        </ul>

        <ul v-if="featured(era.id).length" class="cards">
          <li
            v-for="p in featured(era.id)"
            :key="p.id"
            :id="`project-${p.id}`"
            class="card"
          >
            <div class="card__head">
              <img
                v-if="p.logo && logoUrl(p.logo)"
                :src="logoUrl(p.logo)"
                :alt="`${p.client} logo`"
                class="card__logo"
                :class="{ 'card__logo--color': logoKeepsColor(p.logo) }"
                :style="{ '--logo-scale': String(logoScale(p.logo)) }"
                loading="lazy"
              />
              <div class="card__ident">
                <h4 class="card__client">{{ p.client }}</h4>
                <p class="card__role">{{ p.role }} &middot; {{ p.years }}</p>
              </div>
              <span class="card__industry">
                {{ INDUSTRY_META[p.industry].label }}
              </span>
            </div>

            <p class="card__headline">{{ p.headline }}</p>
            <p class="card__body">{{ p.body }}</p>

            <ul v-if="p.impact.length" class="impact">
              <li v-for="line in p.impact" :key="line" class="impact__item">
                {{ line }}
              </li>
            </ul>
          </li>
        </ul>

        <template v-if="rest(era.id).length">
          <button
            type="button"
            class="more-btn"
            :aria-expanded="expanded.has(era.id)"
            @click="toggleEra(era.id)"
          >
            {{ expanded.has(era.id) ? '−' : '+' }}
            {{ rest(era.id).length }} more from this chapter
          </button>

          <ul v-show="expanded.has(era.id)" class="minor">
            <li v-for="p in rest(era.id)" :key="p.id" class="minor__item">
              <span class="minor__client">{{ p.client }}</span>
              <span class="minor__years">{{ p.years }}</span>
              <span class="minor__headline">{{ p.headline }}</span>
            </li>
          </ul>
        </template>
      </div>
    </article>
  </div>
</template>

<style scoped>
.chapters {
  display: flex;
  flex-direction: column;
}

.era {
  display: grid;
  grid-template-columns: 1.5rem minmax(0, 1fr);
  gap: 0 1.5rem;
}

.era__rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.7rem;
}

.era__dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: var(--color-orange);
  flex: none;
  box-shadow: 0 0 0 4px rgba(224, 139, 74, 0.15);
}

.era__line {
  flex: 1;
  width: 1px;
  background: linear-gradient(
    to bottom,
    var(--color-border),
    var(--color-border) 70%,
    transparent
  );
  margin: 0.5rem 0 0;
}

.era__body {
  padding-bottom: 4rem;
  min-width: 0;
}

.era__header {
  margin-bottom: 1rem;
}

.era__level {
  margin: 0 0 0.3rem;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-tan);
  font-weight: 600;
}

.era__title {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  margin: 0;
  color: var(--color-text);
  line-height: 1.1;
}

.era__years {
  margin: 0.35rem 0 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.04em;
}

.era__narrative {
  margin: 0 0 1.25rem;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
  max-width: 46rem;
}

.roles {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 1.5rem;
  padding: 0;
}

.roles__item {
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.25rem 0.7rem;
}

.stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem 2.5rem;
  margin: 0 0 2rem;
  padding: 1.25rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.stats__value {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  color: var(--color-orange);
  line-height: 1;
}

.stats__label {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
}

.cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.card {
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: rgba(212, 184, 138, 0.35);
}

/* Brief flash when an intro link scrolls you to a card, so it's obvious
   which one of the many you landed on. */
.card:target,
.card.card--flash {
  animation: card-flash 1.6s ease-out;
}

@keyframes card-flash {
  0%,
  40% {
    border-color: var(--color-orange);
    background: rgba(224, 139, 74, 0.09);
  }
  100% {
    border-color: var(--color-border);
    background: var(--color-bg-elev);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card:target,
  .card.card--flash {
    animation: none;
    border-color: var(--color-orange);
  }
}

.card__head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.card__logo {
  height: calc(1.6rem * var(--logo-scale, 1));
  width: auto;
  max-width: 7rem;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.85;
  flex: none;
}

/* Knockout marks would flatten to a solid shape if forced white. */
.card__logo--color {
  filter: none;
  opacity: 1;
}

.card__ident {
  min-width: 0;
  flex: 1;
}

.card__client {
  font-family: var(--font-display);
  font-size: 1.25rem;
  margin: 0;
  color: var(--color-text);
  line-height: 1.2;
}

.card__role {
  margin: 0.15rem 0 0;
  font-size: 0.8rem;
  color: var(--color-tan);
  letter-spacing: 0.02em;
}

.card__industry {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  white-space: nowrap;
}

.card__headline {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.55;
  color: var(--color-text);
  font-weight: 500;
}

.card__body {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.impact {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 1rem 0 0;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.impact__item {
  position: relative;
  padding-left: 1.1rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: var(--color-text);
}

.impact__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: var(--color-orange);
}

.more-btn {
  margin-top: 1.25rem;
  background: transparent;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  font: inherit;
  font-size: 0.85rem;
  padding: 0.55rem 1rem;
  cursor: pointer;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
}

.more-btn:hover,
.more-btn:focus-visible {
  color: var(--color-tan);
  border-color: var(--color-tan);
}

.more-btn:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}

.minor {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.minor__item {
  display: grid;
  grid-template-columns: minmax(6rem, auto) minmax(4.5rem, auto) minmax(0, 1fr);
  gap: 0.25rem 1rem;
  align-items: baseline;
  padding: 0.65rem 0.85rem;
  border-left: 2px solid var(--color-border);
  background: rgba(240, 230, 210, 0.02);
}

.minor__client {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--color-text);
}

.minor__years {
  font-size: 0.75rem;
  color: var(--color-tan);
  font-variant-numeric: tabular-nums;
}

.minor__headline {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

@media (max-width: 720px) {
  .era {
    grid-template-columns: 1rem minmax(0, 1fr);
    gap: 0 1rem;
  }

  .card__head {
    gap: 0.75rem;
  }

  .card__industry {
    order: 3;
    width: 100%;
  }

  .minor__item {
    grid-template-columns: 1fr;
  }
}
</style>
