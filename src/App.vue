<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="app-main">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <footer class="app-footer">
    <p>© {{ new Date().getFullYear() }} I've Ben Moore, LLC</p>
  </footer>
</template>

<style scoped>
.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-footer {
  padding: 2rem 1.5rem;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--color-border);
}

.app-footer p {
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
