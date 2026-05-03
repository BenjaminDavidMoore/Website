<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import {
  CATEGORY_META,
  TIMELINE,
  type TimelineEntry,
} from '@/data/timeline'

const hoveredId = ref<string | null>(null)
const pinnedId = ref<string | null>(TIMELINE[0]?.id ?? null)
const sortDir = ref<'asc' | 'desc'>('asc')
const query = ref('')

const activeId = computed(
  () => hoveredId.value ?? pinnedId.value ?? TIMELINE[0]?.id ?? null,
)

const active = computed<TimelineEntry | null>(
  () => TIMELINE.find((e) => e.id === activeId.value) ?? null,
)

function fuzzyMatch(q: string, text: string): boolean {
  if (!q) return true
  const needle = q.toLowerCase().trim()
  if (!needle) return true
  const haystack = text.toLowerCase()
  if (haystack.includes(needle)) return true
  let qi = 0
  for (let i = 0; i < haystack.length && qi < needle.length; i++) {
    if (haystack[i] === needle[qi]) qi++
  }
  return qi === needle.length
}

const filtered = computed(() =>
  TIMELINE.filter((e) =>
    fuzzyMatch(query.value, `${e.title} ${e.summary} ${e.detail}`),
  ),
)

const yearGroups = computed(() => {
  const groups = new Map<number, TimelineEntry[]>()
  for (const entry of filtered.value) {
    const list = groups.get(entry.year) ?? []
    list.push(entry)
    groups.set(entry.year, list)
  }
  const arr = Array.from(groups.entries()).map(([year, entries]) => ({
    year,
    entries,
  }))
  arr.sort((a, b) => (sortDir.value === 'asc' ? a.year - b.year : b.year - a.year))
  if (sortDir.value === 'desc') {
    for (const g of arr) g.entries = [...g.entries].reverse()
  }
  return arr
})

function toggleSort() {
  sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
}

function onHover(id: string) {
  hoveredId.value = id
}

function onLeave() {
  hoveredId.value = null
}

function togglePin(id: string) {
  pinnedId.value = pinnedId.value === id ? null : id
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && pinnedId.value) {
    pinnedId.value = null
  }
}

const listRef = ref<HTMLElement | null>(null)

defineExpose({
  async goToEntry(id: string) {
    pinnedId.value = id
    await nextTick()
    const el = listRef.value?.querySelector<HTMLElement>(
      `[data-entry-id="${id}"]`,
    )
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  },
})
</script>

<template>
  <div class="timeline" @keydown="onKeydown">
    <header class="timeline__header">
      <div class="timeline__legend">
        <span
          v-for="(meta, key) in CATEGORY_META"
          :key="key"
          class="legend__item"
        >
          <span class="legend__dot" :style="{ background: meta.color }" />
          {{ meta.label }}
        </span>
      </div>
      <div class="timeline__controls">
        <label class="search">
          <span class="search__icon" aria-hidden="true">⌕</span>
          <input
            v-model="query"
            type="search"
            class="search__input"
            placeholder="Search engagements…"
            aria-label="Search timeline"
          />
        </label>
        <button
          type="button"
          class="sort-btn"
          @click="toggleSort"
          :aria-pressed="sortDir === 'desc'"
        >
          {{ sortDir === 'asc' ? 'Most recent first' : 'Oldest first' }}
        </button>
      </div>
    </header>

    <div class="timeline__panes">
    <div class="timeline__list" ref="listRef">
      <p v-if="yearGroups.length === 0" class="timeline__empty">
        No matches for &ldquo;{{ query }}&rdquo;.
      </p>
      <section
        v-for="group in yearGroups"
        :key="group.year"
        class="year-group"
      >
        <h3 class="year-group__year">{{ group.year }}</h3>
        <ul class="year-group__entries">
          <li
            v-for="entry in group.entries"
            :key="entry.id"
            class="entry-row"
          >
            <button
              type="button"
              class="entry"
              :class="[
                `entry--${entry.category}`,
                { 'entry--active': activeId === entry.id },
                { 'entry--pinned': pinnedId === entry.id },
              ]"
              :data-entry-id="entry.id"
              :aria-pressed="pinnedId === entry.id"
              @mouseenter="onHover(entry.id)"
              @focus="onHover(entry.id)"
              @mouseleave="onLeave"
              @blur="onLeave"
              @click="togglePin(entry.id)"
            >
              <span class="entry__bar" aria-hidden="true">
                <span class="entry__bar-label">{{ entry.title }}</span>
              </span>
              <span class="entry__body">
                <span class="entry__title">{{ entry.title }}</span>
                <span class="entry__summary">{{ entry.summary }}</span>
              </span>
            </button>
          </li>
        </ul>
      </section>
    </div>

    <aside class="detail" aria-live="polite">

      <Transition name="fade" mode="out-in">
        <article v-if="active" :key="active.id" class="detail__card">
          <div class="detail__meta">
            <span class="detail__year">{{ active.year }}</span>
            <span
              class="detail__category"
              :style="{ color: CATEGORY_META[active.category].color }"
            >
              <span
                class="detail__category-dot"
                :style="{
                  background: CATEGORY_META[active.category].color,
                }"
              />
              {{ CATEGORY_META[active.category].label }}
            </span>
            <span
              v-if="pinnedId === active.id"
              class="detail__pinned"
              aria-label="Pinned"
            >
              pinned · click again or press Esc to release
            </span>
          </div>
          <h2 class="detail__title">{{ active.title }}</h2>
          <p class="detail__body">{{ active.detail }}</p>
        </article>
      </Transition>
    </aside>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  --cat-billable: #d4b88a;
  --cat-labs: #d97a8e;
  --cat-internal: #7fa8c1;
  --cat-sales: #98c08a;
}

.timeline__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.timeline__panes {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 2.5rem;
  align-items: start;
}

.timeline__list {
  max-height: calc(100vh - 8rem);
  overflow-y: auto;
  padding-right: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

.timeline__empty {
  color: var(--color-text-muted);
  font-style: italic;
  margin: 1rem 0;
}

.timeline__legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.timeline__controls {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.search {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color 0.15s ease;
}

.search:focus-within {
  border-color: var(--color-tan);
}

.search__icon {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1;
}

.search__input {
  background: transparent;
  border: 0;
  outline: 0;
  color: var(--color-text);
  font: inherit;
  font-size: 0.9rem;
  width: 12rem;
  padding: 0;
}

.search__input::placeholder {
  color: var(--color-text-muted);
}

.sort-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  padding: 0.45rem 0.85rem;
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;
}

.sort-btn:hover,
.sort-btn:focus-visible {
  border-color: var(--color-tan);
  color: var(--color-tan);
}

.sort-btn[aria-pressed='true'] {
  border-color: var(--color-orange);
  color: var(--color-orange);
}

.legend__item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.legend__dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  display: inline-block;
}

.year-group {
  margin-bottom: 1.5rem;
}

.year-group__year {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 0.75rem;
  padding-left: 0.25rem;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  position: sticky;
  top: 0;
  background: var(--color-bg);
  padding-top: 0.75rem;
  z-index: 1;
}

.year-group__entries {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.entry {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: stretch;
  gap: 0.85rem;
  width: 100%;
  text-align: left;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0.6rem 0.85rem;
  color: inherit;
  cursor: pointer;
  font: inherit;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.entry:hover,
.entry:focus-visible,
.entry--active {
  background: rgba(240, 230, 210, 0.04);
  border-color: var(--color-border);
}

.entry--pinned {
  background: rgba(224, 139, 74, 0.08);
  border-color: rgba(224, 139, 74, 0.4);
}

.entry:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}

.entry__bar {
  --bar-color: var(--cat-billable);
  width: 1.5rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--bar-color) 25%, transparent);
  border: 1px solid color-mix(in srgb, var(--bar-color) 60%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.5rem 0;
}

.entry--billable .entry__bar { --bar-color: var(--cat-billable); }
.entry--labs .entry__bar     { --bar-color: var(--cat-labs); }
.entry--internal .entry__bar { --bar-color: var(--cat-internal); }
.entry--sales .entry__bar    { --bar-color: var(--cat-sales); }

.entry__bar-label {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bar-color);
  white-space: nowrap;
  overflow: hidden;
  max-height: 100%;
  font-weight: 600;
}

.entry__body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.entry__title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-text);
  line-height: 1.25;
}

.entry__summary {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.45;
}

.detail {
  position: sticky;
  top: 6rem;
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 2rem;
  min-height: 18rem;
}

.detail__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.detail__year {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: normal;
  text-transform: none;
  color: var(--color-tan);
}

.detail__category {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
}

.detail__category-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}

.detail__pinned {
  font-size: 0.7rem;
  color: var(--color-orange);
  letter-spacing: 0.08em;
  text-transform: none;
}

.detail__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin: 0;
  color: var(--color-text);
  line-height: 1.15;
}

.detail__body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 880px) {
  .timeline__panes {
    grid-template-columns: 1fr;
  }

  .timeline__list {
    max-height: none;
    overflow: visible;
    padding-right: 0;
  }

  .detail {
    position: static;
    min-height: 0;
  }

  .search__input {
    width: 100%;
  }
}
</style>
