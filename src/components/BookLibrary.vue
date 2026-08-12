<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  BOOKS,
  GENRES,
  coverUrl,
  shelve,
  shortTitle,
  type Book,
  type Genre,
} from '@/data/reading'

const activeGenre = ref<Genre | 'all'>('all')
const selected = ref<Book | null>(null)
const dialogRef = ref<HTMLElement | null>(null)
let lastFocused: HTMLElement | null = null

const counts = computed(() => {
  const m = new Map<Genre, number>()
  for (const b of BOOKS) m.set(b.g, (m.get(b.g) ?? 0) + 1)
  return m
})

const visible = computed(() =>
  activeGenre.value === 'all'
    ? BOOKS
    : BOOKS.filter((b) => b.g === activeGenre.value),
)

const shelves = computed(() => shelve(visible.value))

const stats = computed(() => ({
  books: BOOKS.length,
  series: new Set(BOOKS.filter((b) => b.kind === 'series').map((b) => b.grp)).size,
  authors: new Set(BOOKS.map((b) => b.a.split(',')[0].trim())).size,
}))

/** Where a book sits, spelled out for the detail panel. */
function placement(b: Book): string {
  if (b.kind === 'theme') return b.grp
  const parts = [b.sub ?? b.grp]
  if (b.o != null) parts.push(`Book ${b.o}`)
  return parts.join(' · ')
}

function open(b: Book, event: MouseEvent | KeyboardEvent) {
  lastFocused = event.currentTarget as HTMLElement
  selected.value = b
}

function close() {
  selected.value = null
  lastFocused?.focus()
  lastFocused = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && selected.value) close()
}

watch(selected, async (b) => {
  document.body.style.overflow = b ? 'hidden' : ''
  if (b) {
    await nextTick()
    dialogRef.value?.focus()
  }
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="lib">
    <header class="lib__header">
      <ul class="lib__stats">
        <li><strong>{{ stats.books }}</strong> books</li>
        <li><strong>{{ stats.series }}</strong> series</li>
        <li><strong>{{ stats.authors }}</strong> authors</li>
      </ul>
    </header>

    <div class="filters" role="group" aria-label="Filter by genre">
      <button
        type="button"
        class="chip"
        :class="{ 'chip--active': activeGenre === 'all' }"
        :aria-pressed="activeGenre === 'all'"
        @click="activeGenre = 'all'"
      >
        Everything <span class="chip__n">{{ BOOKS.length }}</span>
      </button>
      <button
        v-for="g in GENRES"
        :key="g"
        type="button"
        class="chip"
        :class="{ 'chip--active': activeGenre === g }"
        :aria-pressed="activeGenre === g"
        @click="activeGenre = activeGenre === g ? 'all' : g"
      >
        {{ g }} <span class="chip__n">{{ counts.get(g) ?? 0 }}</span>
      </button>
    </div>

    <div class="shelves">
      <section
        v-for="shelf in shelves"
        :key="shelf.group"
        class="shelf"
        :class="`shelf--${shelf.kind}`"
      >
        <header class="shelf__head">
          <h3 class="shelf__title">
            {{ shelf.group }}
            <span class="shelf__meta">
              {{ shelf.count }} {{ shelf.count === 1 ? 'book' : 'books' }}
              <template v-if="shelf.kind === 'author'"> &middot; by author</template>
            </span>
          </h3>
          <p v-if="shelf.blurb" class="shelf__blurb">{{ shelf.blurb }}</p>
        </header>

        <div
          v-for="(sub, si) in shelf.subs"
          :key="sub.name ?? `sub-${si}`"
          class="sub"
        >
          <h4 v-if="sub.name" class="sub__title">{{ sub.name }}</h4>

          <ul class="books">
            <li v-for="b in sub.books" :key="b.c" class="book">
              <button type="button" class="card" @click="open(b, $event)">
                <span class="card__art">
                  <img
                    :src="coverUrl(b.c)"
                    :alt="`Cover of ${b.t}`"
                    class="card__cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span class="card__scrim" aria-hidden="true" />
                  <span class="card__peek" aria-hidden="true">Details</span>
                </span>
                <span class="card__title">
                  <span v-if="b.o != null && shelf.kind === 'series'" class="card__num">
                    {{ b.o }}
                  </span>
                  {{ shortTitle(b) }}
                </span>
                <span class="card__author">{{ b.a.split(',')[0] }}</span>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <Transition name="modal">
      <div v-if="selected" class="modal" @click.self="close()">
        <div
          ref="dialogRef"
          class="sheet"
          role="dialog"
          aria-modal="true"
          :aria-label="selected.t"
          tabindex="-1"
        >
          <button type="button" class="sheet__close" aria-label="Close" @click="close()">
            &times;
          </button>

          <img
            :src="coverUrl(selected.c)"
            :alt="`Cover of ${selected.t}`"
            class="sheet__cover"
          />

          <div class="sheet__body">
            <p class="sheet__placement">{{ placement(selected) }}</p>
            <h3 class="sheet__title">{{ selected.t }}</h3>
            <p class="sheet__by">{{ selected.a }}</p>

            <p v-if="selected.d" class="sheet__summary">{{ selected.d }}</p>

            <dl class="sheet__facts">
              <div>
                <dt>Narrated by</dt>
                <dd>{{ selected.n || '—' }}</dd>
              </div>
              <div>
                <dt>Genre</dt>
                <dd>{{ selected.g }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.lib__header {
  margin-bottom: 1.5rem;
}

.lib__stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin: 0;
  padding: 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.lib__stats strong {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-orange);
  margin-right: 0.3rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-muted);
  font: inherit;
  font-size: 0.82rem;
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
  background: var(--color-tan);
  border-color: var(--color-tan);
  color: var(--color-bg-deep);
  font-weight: 600;
}

.chip__n {
  font-variant-numeric: tabular-nums;
  opacity: 0.65;
  font-size: 0.75em;
}

.shelves {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.shelf--series,
.shelf--author {
  border-left: 2px solid var(--color-border);
  padding-left: 1.25rem;
}

/* Themed shelves are my own grouping rather than a real series, so they get a
   dashed rule instead of a solid one. */
.shelf--theme {
  border-left: 2px dashed rgba(212, 184, 138, 0.28);
  padding-left: 1.25rem;
}

.shelf__head {
  margin-bottom: 1.25rem;
}

.shelf__title {
  font-family: var(--font-display);
  font-size: 1.45rem;
  margin: 0;
  color: var(--color-tan);
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  line-height: 1.2;
}

.shelf__meta {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.shelf__blurb {
  margin: 0.4rem 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text-muted);
  max-width: 46rem;
}

.sub + .sub {
  margin-top: 2rem;
}

.sub__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-style: italic;
  margin: 0 0 0.85rem;
  color: var(--color-text-muted);
}

.books {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1.75rem 1.15rem;
}

.book {
  min-width: 0;
}

/* Netflix-ish: the cover lifts and grows over its neighbours on hover. */
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: transform 0.28s cubic-bezier(0.2, 0.7, 0.3, 1);
}

.card:hover,
.card:focus-visible {
  transform: scale(1.06) translateY(-6px);
  z-index: 2;
}

.card:focus-visible {
  outline: none;
}

.card:focus-visible .card__art {
  outline: 2px solid var(--color-orange);
  outline-offset: 3px;
}

.card__art {
  position: relative;
  display: block;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--color-bg-elev);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  transition: box-shadow 0.28s ease;
}

.card:hover .card__art,
.card:focus-visible .card__art {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
}

.card__cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 24, 18, 0.85), transparent 55%);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.card__peek {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.6rem;
  text-align: center;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-tan);
  opacity: 0;
  transform: translateY(4px);
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.card:hover .card__scrim,
.card:focus-visible .card__scrim,
.card:hover .card__peek,
.card:focus-visible .card__peek {
  opacity: 1;
  transform: translateY(0);
}

.card__title {
  margin-top: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.35;
  color: var(--color-text);
}

.card__num {
  display: inline-block;
  min-width: 1.15rem;
  margin-right: 0.15rem;
  font-family: var(--font-display);
  color: var(--color-orange);
  font-size: 0.9rem;
}

.card__author {
  margin-top: 0.1rem;
  font-size: 0.74rem;
  color: var(--color-text-muted);
  line-height: 1.35;
}

/* ── Detail sheet ─────────────────────────────────────────────────── */
.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(10, 24, 18, 0.78);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.sheet {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 13rem) minmax(0, 1fr);
  gap: 1.75rem;
  align-items: start;
  max-width: 42rem;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 1.75rem;
  background: var(--color-bg-elev);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
}

.sheet:focus {
  outline: none;
}

.sheet__close {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
  background: transparent;
  border: 0;
  color: var(--color-text-muted);
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem;
}

.sheet__close:hover,
.sheet__close:focus-visible {
  color: var(--color-orange);
}

.sheet__cover {
  width: 100%;
  border-radius: var(--radius-sm);
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.sheet__placement {
  margin: 0 0 0.4rem;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-tan);
  font-weight: 600;
}

.sheet__title {
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.6vw, 1.75rem);
  margin: 0 0 0.3rem;
  color: var(--color-text);
  line-height: 1.2;
  padding-right: 1.5rem;
}

.sheet__by {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.sheet__summary {
  margin: 1.1rem 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}

.sheet__facts {
  margin: 1.25rem 0 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
}

.sheet__facts div {
  min-width: 0;
}

.sheet__facts dt {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.15rem;
}

.sheet__facts dd {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text);
  line-height: 1.45;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-active .sheet,
.modal-leave-active .sheet {
  transition:
    transform 0.24s cubic-bezier(0.2, 0.7, 0.3, 1),
    opacity 0.24s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .sheet,
.modal-leave-to .sheet {
  transform: translateY(12px) scale(0.98);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .card,
  .card__art,
  .card__scrim,
  .card__peek,
  .modal-enter-active,
  .modal-leave-active,
  .modal-enter-active .sheet,
  .modal-leave-active .sheet {
    transition: none;
  }
  .card:hover,
  .card:focus-visible {
    transform: none;
  }
}

@media (max-width: 640px) {
  .books {
    grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
    gap: 1.35rem 0.85rem;
  }
  .shelf--series,
  .shelf--author,
  .shelf--theme {
    padding-left: 0.85rem;
  }
  .sheet {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.25rem;
  }
  .sheet__cover {
    max-width: 11rem;
  }
}
</style>
