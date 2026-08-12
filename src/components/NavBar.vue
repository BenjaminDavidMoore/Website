<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  { to: '/consulting', label: 'Consulting' },
  { to: '/making', label: 'Making' },
  { to: '/reading', label: 'Reading' },
  { to: '/adventuring', label: 'Adventuring' },
] as const
</script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <RouterLink to="/" class="nav__brand">
        I've Ben
      </RouterLink>
      <nav class="nav__links" aria-label="Primary">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          active-class="nav__link--active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(28, 58, 46, 0.78);
  backdrop-filter: blur(10px) saturate(140%);
  -webkit-backdrop-filter: blur(10px) saturate(140%);
  border-bottom: 1px solid var(--color-border);
}

.nav__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
}

.nav__brand {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
  font-weight: 500;
  white-space: nowrap;
}

.nav__brand:hover {
  color: var(--color-orange);
}

.nav__links {
  display: flex;
  gap: 1.75rem;
}

.nav__link {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.15s ease;
}

.nav__link:hover {
  color: var(--color-text);
}

.nav__link--active {
  color: var(--color-tan);
}

.nav__link--active::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-orange);
}

@media (max-width: 640px) {
  .nav__inner {
    padding: 0.75rem 1rem;
  }
  .nav__brand {
    font-size: 1.15rem;
  }
  .nav__links {
    gap: 1rem;
  }
  .nav__link {
    font-size: 0.85rem;
  }
}
</style>
