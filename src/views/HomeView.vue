<template>
  <section class="home-section">
    <div class="home-content">
      <div class="text-content">
        <h1 class="home-title">
          Hi, I'm 
          <span class="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
            Resul Can
          </span>
        </h1>

        <p class="home-subtitle">
          Hi, I’m Can. I am a junior developer who is still learning and improving every day. 
          I really enjoy working with new technologies, even if I sometimes feel a little shy to show my skills. 
          Even though I try not to rely too much on AI, I still use it in a way that doesn’t stop me from learning because I don’t want to miss out on new developments.
        </p>

        <p class="home-subtitle">
           I am looking for new opportunities where I can grow and gain experience. I may not know everything yet, but I am motivated, open to feedback, and always ready to learn. 
           I believe that with patience and practice, I can become better step by step and contribute to a team with my effort and positivity.
        </p>
        
        <div class="home-buttons">
          <router-link to="/projects" class="btn-primary">My Projects</router-link>
          <div class=" flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/resulcan" class="icon-link"  target="_blank">
              <i class="fa-brands fa-linkedin-in contact-icon"></i>
            </a>
            <a href="https://github.com/cwnnn" class="icon-link" target="_blank">
              <i class="fa-brands fa-github contact-icon"></i>
            </a>
            <a href="mailto:resulcwn@gmail.com" class="icon-link"  target="_blank">
              <i class="fa-regular fa-envelope contact-icon"></i>
            </a>
            <a href="https://www.instagram.com/resulcwn/#" class="icon-link" target="_blank">
              <i class="fa-brands fa-instagram contact-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="relative group">
        <div class="profile-image">
          <img 
            src="../assets/myProfile.jpeg"
            alt="Profile Picture" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mt-16 px-6">
    <h2 class="text-3xl font-bold mb-2 text-center">My Projects</h2> 
    <div class="w-20 h-1 mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
      <div class="project-counter-wrapper">    
        <p class="project-counter">{{ projects.length }}+</p>
        <p class="project-counter-label">Tamamlanan projeler</p>
      </div>
      
    <RcsResponsiveSlider :items="projects" link="./HomeView.vue" />
  </section>

  <RcsSpacer size="44" />

  <section class="skills-section mt-16 px-6">
    <h2 class="text-3xl font-bold mb-2 text-center">My Skills</h2>
    <div class="w-20 h-1 mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
   <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
     <RcsProficiencyBar v-for="item in skills" :key="item.skill" :skill="item.skill" :level="item.level" />
    </div>
  </section>

  <RcsSpacer size="44" />

</template>

<script setup>
import RcsProficiencyBar from '@/components/RcsProficiencyBar/RcsProficiencyBar.vue';
import RcsResponsiveSlider from "@/components/RcsResponsiveSlider/RcsResponsiveSlider.vue";
import RcsSpacer from '@/components/RcsSpacer/RcsSpacer.vue';

import { projects } from '@/data/projects';
import { skills } from '@/data/AboutMe';

</script>

<style scoped>
@reference "tailwindcss/theme.css";

.home-section {
  @apply min-h-screen flex items-center justify-center px-6 py-12;
}

.home-content {
  @apply flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl w-full;
}

.text-content {
  @apply flex-1 text-center md:text-left;
}

.home-title {
  @apply text-4xl md:text-5xl font-bold mb-4;
}

.highlight {
  @apply text-indigo-400;
}

.home-subtitle {
  @apply text-lg md:text-xl max-w-xl mb-6;
}

.home-buttons {
  @apply flex gap-4 flex-wrap justify-center md:justify-start ;
}

.profile-image {
  @apply w-72 h-72 rounded-full overflow-hidden border-4 border-indigo-400/30 shadow-2xl transition-transform duration-300 group-hover:scale-105;
}

.btn-primary {
  @apply px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition hover:scale-105;
}

.btn-secondary {
  @apply px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full transition;
}

.contact-icon {
  @apply text-3xl
}

.icon-link{
  @apply transition duration-300;
}

.icon-link:hover {
  @apply text-indigo-400;
  filter: drop-shadow(0 0 8px #818cf8);
}

.project-counter-wrapper {
  @apply flex justify-center items-center gap-4 mb-0 flex flex-col;
}

.project-counter {
  @apply text-2xl max-w-xl  border-b-2 border-indigo-400;
}

.project-counter-label {
  @apply text-gray-300 max-w-xl  ;
}

</style>