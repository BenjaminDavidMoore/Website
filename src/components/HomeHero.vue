<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import photoUrl from '@/assets/profile.jpg'

const words = [
  'Consulting',
  'Making',
  'Reading',
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
      <div class="hero__text">
        <p class="hero__greeting">Why hello there! I&rsquo;m Ben Moore, and&hellip;</p>

        <h1 class="hero__title">
          <span class="hero__prefix">I&rsquo;ve Ben</span>
          <span class="hero__roller" aria-live="polite" aria-atomic="true">
            <Transition name="roll">
              <span :key="words[index]" class="hero__word">{{ words[index] }}</span>
            </Transition>
          </span>
        </h1>

        <p class="hero__intro">
          I spent a decade going from intern to partner at a product
          engineering firm in Dallas &mdash; building the software, leading the
          teams, and eventually selling the work. I&rsquo;m independent now.
          This site is the long version.
        </p>

        <RouterLink to="/consulting" class="hero__cta">
          See the work
          <span class="hero__cta-arrow" aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>

      <div class="hero__portrait">
        <img :src="photoUrl" alt="Ben Moore" class="hero__portrait-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: min(80vh, 46rem);
  padding: 4rem 1.5rem 3rem;
  background:
    radial-gradient(ellipse at 25% 15%, rgba(224, 139, 74, 0.1), transparent 55%),
    radial-gradient(ellipse at 78% 85%, rgba(127, 168, 193, 0.08), transparent 60%);
}

.hero__inner {
  max-width: var(--max-width);
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  align-items: center;
  gap: clamp(2rem, 6vw, 5rem);
}

.hero__greeting {
  margin: 0 0 1.25rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--color-text-muted);
  line-height: 1.3;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.025em;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero__prefix {
  color: var(--color-text);
}

/* The rotating word sits on its own line so its changing width never
   reflows anything around it. */
.hero__roller {
  position: relative;
  display: block;
  width: 100%;
  overflow: clip;
  overflow-clip-margin: 0.28em;
  line-height: 1.15;
  color: var(--color-orange);
  font-style: italic;
}

.hero__word {
  display: inline-block;
  white-space: nowrap;
  will-change: transform, opacity;
}

.hero__intro {
  margin: 1.75rem 0 0;
  font-size: clamp(1rem, 1.3vw, 1.1rem);
  color: var(--color-text-muted);
  max-width: 34rem;
  line-height: 1.7;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 2rem;
  padding: 0.8rem 1.4rem;
  border: 1px solid var(--color-orange);
  border-radius: var(--radius-md);
  color: var(--color-orange);
  font-size: 0.95rem;
  font-weight: 500;
  transition:
    background 0.18s ease,
    color 0.18s ease;
}

.hero__cta:hover {
  background: var(--color-orange);
  color: var(--color-bg-deep);
}

.hero__cta:focus-visible {
  outline: 2px solid var(--color-tan);
  outline-offset: 3px;
}

.hero__cta-arrow {
  transition: transform 0.18s ease;
}

.hero__cta:hover .hero__cta-arrow {
  transform: translateX(3px);
}

/* The portrait is black and white; a warm wash in soft-light settles it into
   the forest palette instead of sitting on top of it as a grey rectangle. */
.hero__portrait {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: calc(var(--radius-md) * 2);
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.4);
}

.hero__portrait::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    150deg,
    rgba(212, 184, 138, 0.26),
    rgba(224, 139, 74, 0.18) 55%,
    rgba(20, 42, 33, 0.45)
  );
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.hero__portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

@media (max-width: 860px) {
  .hero {
    min-height: 0;
    padding: 3rem 1.5rem 2rem;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  /* Portrait leads on narrow screens — the headline reads better once
     you already know whose site this is. */
  .hero__portrait {
    order: -1;
    max-width: 15rem;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }
}
</style>
