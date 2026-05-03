<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const words = [
  'Consulting',
  'Making',
  'Wondering',
  'Adventuring',
  'Climbing',
  'Overlanding',
  'Cooking',
  'Playing',
] as const

const index = ref(0)
let timer: number | undefined

onMounted(() => {
  timer = window.setInterval(() => {
    index.value = (index.value + 1) % words.length
  }, 2200)
})

onBeforeUnmount(() => {
  if (timer !== undefined) window.clearInterval(timer)
})
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">
        <span class="hero__prefix">I've Ben</span>
        <span class="hero__roller" aria-live="polite" aria-atomic="true">
          <Transition name="roll">
            <span :key="words[index]" class="hero__word">{{ words[index] }}</span>
          </Transition>
        </span>
      </h1>
      <p class="hero__subtitle">
        Tech consulting, side projects, and assorted curiosities.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 4rem 1.5rem;
  background:
    radial-gradient(ellipse at 25% 15%, rgba(224, 139, 74, 0.10), transparent 55%),
    radial-gradient(ellipse at 78% 85%, rgba(127, 168, 193, 0.08), transparent 60%);
}

.hero__inner {
  max-width: var(--max-width);
  width: 100%;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 11vw, 8rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1em;
}

.hero__prefix {
  color: var(--color-text);
}

.hero__roller {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  line-height: 1.15;
  color: var(--color-orange);
  font-style: italic;
}

.hero__word {
  display: inline-block;
  white-space: nowrap;
  will-change: transform, opacity;
}

.hero__subtitle {
  margin-top: 2.5rem;
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  color: var(--color-text-muted);
  max-width: 36rem;
  line-height: 1.6;
}

.roll-enter-active,
.roll-leave-active {
  transition:
    transform 0.55s cubic-bezier(0.65, 0, 0.35, 1),
    opacity 0.4s ease;
}

.roll-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}

.roll-enter-from {
  transform: translateY(85%);
  opacity: 0;
}

.roll-leave-to {
  transform: translateY(-85%);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .roll-enter-active,
  .roll-leave-active {
    transition: opacity 0.25s ease;
  }
  .roll-enter-from,
  .roll-leave-to {
    transform: none;
  }
}
</style>
