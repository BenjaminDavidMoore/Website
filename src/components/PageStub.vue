<script setup lang="ts">
defineProps<{
  title: string
  lede: string
}>()
</script>

<template>
  <section class="page">
    <div class="page__inner">
      <header class="page__header">
        <p class="page__eyebrow">I've Ben</p>
        <h1 class="page__title">{{ title }}</h1>
      </header>
      <p class="page__lede">{{ lede }}</p>
      <p class="page__placeholder">More details coming soon.</p>
    </div>
  </section>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 4rem 1.5rem 6rem;
}

.page__inner {
  max-width: 720px;
  margin: 0 auto;
}

.page__header {
  margin-bottom: 2rem;
}

.page__eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-tan);
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.page__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  margin: 0;
  color: var(--color-orange);
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.page__lede {
  font-size: 1.2rem;
  color: var(--color-text);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.page__placeholder {
  margin-top: 2rem;
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
