<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue'
import SectionCards from '@/components/SectionCards.vue'
</script>

<template>
  <div class="home">
    <HomeHero />
    <SectionCards />
  </div>
</template>

<style scoped>
/* Let the hero absorb any extra viewport height so the section cards always
   sit just above the footer instead of leaving a gap on tall screens. */
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.home > :first-child {
  flex: 1;
}
</style>
