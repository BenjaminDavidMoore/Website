<script setup lang="ts">
import SideProjects from '@/components/SideProjects.vue'
</script>

<template>
  <section class="making">
    <div class="making__inner">
      <header class="making__header">
        <p class="making__eyebrow">I've Ben</p>
        <h1 class="making__title">Making</h1>
        <p class="making__lede">
          Software, sawdust, and whatever else the current curiosity demands.
        </p>
      </header>

      <SideProjects />
    </div>
  </section>
</template>

<style scoped>
.making {
  flex: 1;
  padding: 4rem 1.5rem 6rem;
}

.making__inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.making__header {
  margin-bottom: 1rem;
}

.making__eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-tan);
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.making__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  margin: 0;
  color: var(--color-orange);
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.making__lede {
  margin: 1rem 0 0;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 38rem;
}
</style>
