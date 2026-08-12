<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { DIALEXA_INTRO } from '@/data/career'
import EraChapters from '@/components/EraChapters.vue'
import LogoWall from '@/components/LogoWall.vue'
import IndependentPitch from '@/components/IndependentPitch.vue'

type TabId = 'lucas' | 'dialexa' | 'independent'

const activeTab = ref<TabId>('dialexa')

const tabs: { id: TabId; label: string; dates: string }[] = [
  { id: 'lucas', label: 'Lucas Vet Hospital', dates: '2006 – 2014' },
  { id: 'dialexa', label: 'Dialexa', dates: '2014 – 2026' },
  { id: 'independent', label: 'Independent Consulting', dates: '2026+' },
]

/** Scrolls the intro links to their project card and flashes it briefly. */
async function jumpTo(id: string, event: Event) {
  event.preventDefault()
  activeTab.value = 'dialexa'
  await nextTick()
  const el = document.getElementById(`project-${id}`)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.classList.remove('card--flash')
  void el.offsetWidth // restart the animation if the same link is clicked twice
  el.classList.add('card--flash')
}

const TAB_IDS = tabs.map((t) => t.id)

function isTabId(value: string): value is TabId {
  return (TAB_IDS as string[]).includes(value)
}

/** Tabs are linkable — /consulting#independent opens that panel directly. */
onMounted(() => {
  const fromHash = window.location.hash.slice(1)
  if (isTabId(fromHash)) activeTab.value = fromHash
})

watch(activeTab, (id) => {
  history.replaceState(null, '', `#${id}`)
})

function onTabKeydown(event: KeyboardEvent, index: number) {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  const dir = event.key === 'ArrowRight' ? 1 : -1
  const next = (index + dir + tabs.length) % tabs.length
  activeTab.value = tabs[next].id
  document.getElementById(`tab-${tabs[next].id}`)?.focus()
}
</script>

<template>
  <section class="consulting">
    <div class="consulting__inner">
      <header class="consulting__header">
        <p class="consulting__eyebrow">I've Ben</p>
        <h1 class="consulting__title">Consulting</h1>
      </header>

      <div class="tabs" role="tablist" aria-label="Career sections">
        <button
          v-for="(tab, idx) in tabs"
          :key="tab.id"
          :id="`tab-${tab.id}`"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
          :tabindex="activeTab === tab.id ? 0 : -1"
          class="tabs__btn"
          :class="{ 'tabs__btn--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
          @keydown="onTabKeydown($event, idx)"
        >
          <span class="tabs__label">{{ tab.label }}</span>
          <span class="tabs__dates">{{ tab.dates }}</span>
        </button>
      </div>

      <section
        v-show="activeTab === 'lucas'"
        id="panel-lucas"
        role="tabpanel"
        aria-labelledby="tab-lucas"
        class="panel"
      >
        <header class="panel__header">
          <h2 class="panel__title">Lucas Veterinary Hospital</h2>
          <p class="panel__subtitle">2006 – 2014 · Vet Tech</p>
        </header>
        <p class="panel__placeholder">
          My first long-term job &mdash; eight years caring for animals (and
          their people) through everything from routine checkups to emergency
          surgeries. More to come on what I learned about pressure, empathy,
          and showing up.
        </p>
      </section>

      <section
        v-show="activeTab === 'dialexa'"
        id="panel-dialexa"
        role="tabpanel"
        aria-labelledby="tab-dialexa"
        class="panel"
      >
        <header class="panel__header">
          <h2 class="panel__title">Dialexa</h2>
          <p class="panel__subtitle">
            2014 – 2026 · A Journey From Intern &rarr; Partner
          </p>
        </header>

        <div class="consulting__intro">
          <p>{{ DIALEXA_INTRO }}</p>
          <ul class="consulting__breadth">
            <li>
              <strong class="consulting__verb">Delivered</strong> at
              <a href="#project-parkhub" @click="jumpTo('parkhub', $event)">startups</a>
              and at
              <a href="#project-pwc-att" @click="jumpTo('pwc-att', $event)">enterprise scale</a>.
            </li>
            <li>
              <strong class="consulting__verb">Led</strong>
              <a href="#project-pwc-boardingpass" @click="jumpTo('pwc-boardingpass', $event)">small teams</a>
              and a
              <a href="#project-intermountain" @click="jumpTo('intermountain', $event)">47-person combined program</a>.
            </li>
            <li>
              <strong class="consulting__verb">Sold</strong> to
              <a href="#project-fnti" @click="jumpTo('fnti', $event)">small clients</a>
              and
              <a href="#project-bcg-varian" @click="jumpTo('bcg-varian', $event)">Fortune 500 accounts</a>.
              Best year was $15M.
            </li>
            <li>
              <strong class="consulting__verb">Architected</strong> for
              <a href="#project-parkhub" @click="jumpTo('parkhub', $event)">startups</a>
              and some of the largest
              <a href="#project-mayo-clinic" @click="jumpTo('mayo-clinic', $event)">health systems in the country</a>.
            </li>
          </ul>
        </div>

        <LogoWall />

        <div class="chapters-intro">
          <h2 class="chapters-intro__title">The long version</h2>
          <p class="chapters-intro__body">
            12 years is a long time to work at one company. So I've broken it down into five chapters and some relevant engagements &mdash; Happy to talk through the rest.
          </p>
        </div>

        <EraChapters />
      </section>

      <section
        v-show="activeTab === 'independent'"
        id="panel-independent"
        role="tabpanel"
        aria-labelledby="tab-independent"
        class="panel"
      >
        <header class="panel__header">
          <h2 class="panel__title">Independent Consulting</h2>
          <p class="panel__subtitle">2026+ · The next chapter</p>
        </header>

        <IndependentPitch />
      </section>
    </div>
  </section>
</template>

<style scoped>
.consulting {
  flex: 1;
  padding: 4rem 1.5rem 6rem;
}

.consulting__inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.consulting__header {
  margin-bottom: 2rem;
}

.consulting__eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-tan);
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.consulting__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  margin: 0;
  color: var(--color-orange);
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2.5rem;
}

.tabs__btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  padding: 0.85rem 1.25rem;
  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  font: inherit;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background 0.15s ease;
  margin-bottom: -1px;
}

.tabs__btn:hover,
.tabs__btn:focus-visible {
  color: var(--color-text);
  background: rgba(240, 230, 210, 0.04);
}

.tabs__btn:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 2px;
}

.tabs__btn--active {
  color: var(--color-orange);
  border-bottom-color: var(--color-orange);
}

.tabs__label {
  font-family: var(--font-display);
  font-size: 1.1rem;
  letter-spacing: -0.01em;
}

.tabs__dates {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.tabs__btn--active .tabs__dates {
  color: var(--color-tan);
}

.panel__header {
  margin-bottom: 2rem;
}

.panel__title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  margin: 0 0 0.4rem;
  color: var(--color-text);
  letter-spacing: -0.015em;
}

.panel__subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0;
  font-style: italic;
}

.panel__placeholder {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 36rem;
  margin: 0;
}

.consulting__intro {
  max-width: 48rem;
  margin: 0 0 3rem;
}

.consulting__intro p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0 0 1.25rem;
}

.consulting__breadth {
  list-style: disc;
  padding: 0 0 0 1.5rem;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.consulting__breadth li {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.consulting__breadth li::marker {
  color: var(--color-tan);
}

.consulting__verb {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.5em;
  color: var(--color-orange);
  letter-spacing: -0.01em;
  margin-right: 0.1em;
}

.consulting__breadth a {
  color: var(--color-tan);
  border-bottom: 1px dotted currentColor;
}

.consulting__breadth a:hover {
  color: var(--color-orange);
}

.chapters-intro {
  margin: 4rem 0 2.5rem;
  max-width: 42rem;
}

.chapters-intro__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin: 0 0 0.5rem;
  color: var(--color-text);
}

.chapters-intro__body {
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

</style>
