<script setup>  
import { onMounted } from 'vue';
import RcsHeader from './components/RcsHeader/RcsHeader.vue';

onMounted(() => {
  const overlay = document.getElementById('overlay');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const mask = `radial-gradient(circle 120px at ${x}px ${y}px, transparent 0%, black 100%)`;
    overlay.style.maskImage = mask;
    overlay.style.webkitMaskImage = mask;
  });
});
</script>

<template>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />

     <RcsHeader />
     <div id="overlay" class="fixed inset-0 z-10 bg-black bg-opacity-90 pointer-events-none"></div>
      <main class="relative z-20 text-white">
       <router-view />
      </main>
</template>

<style scoped>
</style>
  
<script>
</script>