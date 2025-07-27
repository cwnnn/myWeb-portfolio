
<template>
  <header class="header">
    <div class="logo">
      <!-- Site title as a clickable link -->
      <router-link to="/" class="logo-link">Resul Can</router-link>
    </div>
    
    <nav class="nav-links">
      <!-- Navigation links to other pages -->
      <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
      <router-link to="/q" class="nav-link" active-class="active">Projects</router-link>
      <router-link to="/w" class="nav-link" active-class="active">About Me</router-link>
      <router-link to="/e" class="nav-link" active-class="active">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped src="./RcsHeader.css">
</style>
