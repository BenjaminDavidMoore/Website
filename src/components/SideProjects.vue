<script setup lang="ts">
import { SIDE_PROJECTS, STATUS_META } from '@/data/side-projects'
</script>

<template>
  <section class="side">
    <header class="side__header">
      <h2 class="side__title">Side projects</h2>
      <p class="side__lede">
        I learn things by building them. These are the ones that got far enough
        to be worth showing.
      </p>
    </header>

    <ul class="side__list">
      <li v-for="p in SIDE_PROJECTS" :key="p.id" class="proj">
        <div class="proj__head">
          <h3 class="proj__name">{{ p.name }}</h3>
          <span class="proj__status" :class="`proj__status--${p.status}`">
            {{ STATUS_META[p.status].label }}
          </span>
        </div>

        <p class="proj__tagline">{{ p.tagline }}</p>
        <p class="proj__body">{{ p.body }}</p>

        <blockquote v-if="p.hook" class="proj__hook">{{ p.hook }}</blockquote>

        <ul class="stack">
          <li v-for="tech in p.stack" :key="tech" class="stack__item">
            {{ tech }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.side {
  margin: 3.5rem 0 0;
}

.side__header {
  margin-bottom: 2rem;
}

.side__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin: 0 0 0.5rem;
  color: var(--color-text);
}

.side__lede {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 42rem;
}

.side__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 21rem), 1fr));
  gap: 1rem;
}

.proj {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: border-color 0.2s ease;
}

.proj:hover {
  border-color: rgba(212, 184, 138, 0.35);
}

.proj__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.4rem;
}

.proj__name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin: 0;
  color: var(--color-text);
  line-height: 1.2;
}

.proj__status {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  border: 1px solid currentColor;
  white-space: nowrap;
  flex: none;
}

.proj__status--active { color: var(--color-orange); }
.proj__status--shipped { color: #98c08a; }
.proj__status--prototype { color: var(--color-blue); }
.proj__status--todo { color: var(--color-tan); }
.proj__status--shelved { color: var(--color-text-muted); }

.proj__tagline {
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
  color: var(--color-tan);
  font-style: italic;
  line-height: 1.5;
}

.proj__body {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.proj__hook {
  margin: 1rem 0 0;
  padding: 0.75rem 0 0.75rem 1rem;
  border-left: 2px solid var(--color-orange);
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--color-text);
}

.stack {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 1.25rem 0 0;
  padding: 0;
}

.stack__item {
  font-size: 0.7rem;
  letter-spacing: 0.03em;
  color: var(--color-text-muted);
  background: rgba(240, 230, 210, 0.05);
  border-radius: var(--radius-sm);
  padding: 0.22rem 0.5rem;
}
</style>
