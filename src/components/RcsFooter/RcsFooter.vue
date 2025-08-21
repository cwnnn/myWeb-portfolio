<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h2 class="footer-title">Can's Portfolio</h2>
        <p class="footer-subtitle">Frontend Developer & Game Enthusiast</p>
        <p class="footer-subtitle">
          resulcwn@gmail.com</p>
      </div>

      <div class="footer-socials">
        <a :href="links.github" target="_blank" class="footer-icon">
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a :href="links.linkedin" target="_blank" class="footer-icon">
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
        <a :href="links.instagram" target="_blank" class="footer-icon">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>

    <div class="footer-copy">
      © {{ currentYear }} Can. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { RcsFooterLinks } from './RcsFooter.interface';

const links: RcsFooterLinks = {
  github: 'https://github.com/cwnnn',
  linkedin: 'https://linkedin.com/in/resulcan',
  instagram: 'https://instagram.com/resulcwn'
};

const currentYear = ref(new Date().getFullYear());
</script>

<style src="./RcsFooter.css"></style>
