<script setup>
import HelloWorld from './components/HelloWorld.vue'
import routes from './router'
</script>

<template>
  <transition name="fade" mode="out-in">
    <div class="router-wrapper">
      <router-view />
    </div>
  </transition>
</template>

<style scoped>
.router-wrapper {
  /* Container para garantir a transição sem sobreposição de elementos */
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3.5s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active em Vue 3 */ {
  opacity: 0;
}
</style>
