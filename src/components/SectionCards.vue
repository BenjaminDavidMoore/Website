<script setup lang="ts">
import { RouterLink } from 'vue-router'

/**
 * The four sections are the words that complete "I've Ben ___", so they carry
 * the same italic-orange display treatment as the roller in the hero. The
 * visual rhyme is what explains the site's name — no copy needed for it.
 */
const sections = [
  {
    to: '/consulting',
    word: 'Consulting',
    line: 'A decade of building, leading, and selling technical work — who I did it for, and what I can do for you.',
  },
  {
    to: '/making',
    word: 'Making',
    line: 'Side projects that got far enough to be worth showing, plus whatever is currently on the bench.',
  },
  {
    to: '/reading',
    word: 'Reading',
    line: 'Everything I have listened my way through — heavy on science fiction, sorted by series.',
  },
  {
    to: '/adventuring',
    word: 'Adventuring',
    line: 'Mountains, overlanding, and the occasional idea that seemed better at the trailhead.',
  },
]
</script>

<template>
  <nav class="sections" aria-label="Sections">
    <ul class="sections__list">
      <li v-for="s in sections" :key="s.to">
        <RouterLink :to="s.to" class="card">
          <span class="card__word">{{ s.word }}</span>
          <span class="card__line">{{ s.line }}</span>
          <span class="card__arrow" aria-hidden="true">&rarr;</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sections {
  padding: 1rem 1.5rem 5rem;
  display: flex;
  justify-content: center;
}

.sections__list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: var(--max-width);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1px;
  background: var(--color-border);
  border-block: 1px solid var(--color-border);
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.6rem;
  padding: 1.75rem 1.5rem 1.5rem;
  background: var(--color-bg);
  color: inherit;
  transition: background 0.2s ease;
}

.card:hover,
.card:focus-visible {
  background: var(--color-bg-elev);
}

.card:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: -2px;
}

.card__word {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.5rem, 2.4vw, 1.9rem);
  color: var(--color-orange);
  line-height: 1.1;
  letter-spacing: -0.015em;
}

.card__line {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  flex: 1;
}

.card__arrow {
  color: var(--color-tan);
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.card:hover .card__arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .card__arrow {
    transition: none;
  }
  .card:hover .card__arrow {
    transform: none;
  }
}
</style>
