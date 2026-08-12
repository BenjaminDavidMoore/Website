<script setup lang="ts">
import BookLibrary from '@/components/BookLibrary.vue'
</script>

<template>
  <section class="reading">
    <div class="reading__inner">
      <header class="reading__header">
        <p class="reading__eyebrow">I've Ben</p>
        <h1 class="reading__title">Reading</h1>
        <p class="reading__lede">
          Mostly listening, if I&rsquo;m honest &mdash; on trails, on drives,
          and in the shop. Heavy on science fiction, with the occasional
          business book I probably should have finished.
        </p>
      </header>

      <BookLibrary />
    </div>
  </section>
</template>

<style scoped>
.reading {
  flex: 1;
  padding: 4rem 1.5rem 6rem;
}

.reading__inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.reading__header {
  margin-bottom: 2.5rem;
}

.reading__eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-tan);
  margin: 0 0 0.5rem;
  font-weight: 500;
}

.reading__title {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  margin: 0;
  color: var(--color-orange);
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.reading__lede {
  margin: 1rem 0 0;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
  max-width: 38rem;
}
</style>
