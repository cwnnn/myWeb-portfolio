<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="logo-link">Resul Can</router-link>
    </div>

    <nav :class="['nav-links']">
      <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
      <router-link to="/projects" class="nav-link" active-class="active">Projects</router-link>
      <router-link to="/w" class="nav-link" active-class="active">About Me</router-link>
      <router-link to="/e" class="nav-link" active-class="active">Contact</router-link>
    </nav>

   <button class="menu-toggle-button " @click="isOpen = !isOpen">☰</button>
    <ul v-if="isOpen" class="md:hidden">
      <li><router-link to="/" class="nav-link" exact-active-class="active" @click="isOpen = false">Home</router-link></li>
      <li><router-link to="/projects" class="nav-link" active-class="active" @click="isOpen = false">Projects</router-link></li>
      <li><router-link to="/w" class="nav-link" active-class="active" @click="isOpen = false">About Me</router-link></li>
      <li><router-link to="/e" class="nav-link" active-class="active" @click="isOpen = false">Contact</router-link></li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false);
</script>

<style scoped src="./RcsHeader.css">
</style>
