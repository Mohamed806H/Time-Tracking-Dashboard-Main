<script setup>
import MainDash from './views/MainDash.vue'

</script>

<template>
  <header class="app__header">
    <MainDash/>
  </header>
</template>

<style scoped>




nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
