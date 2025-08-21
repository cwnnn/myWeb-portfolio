<template>
  <section class="home-section">
    <div class="home-content">
      <div class="text-content">
        <h1 class="home-title">
          Hi, I'm <span class="highlight">Can</span>
        </h1>

        <p class="home-subtitle">
          Hi, I'm Can — a passionate developer, designer, and technology enthusiast.  
          I love crafting seamless digital experiences and building innovative projects that solve real problems.  
          Constantly learning and experimenting with new tools and frameworks to stay ahead in the fast-evolving tech world.
        </p>

        <p class="home-subtitle">
          When I'm not coding, I enjoy exploring design trends, enhancing user interfaces, and sharing my knowledge with the community.  
          My mission is to create intuitive and efficient applications that make a difference.
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
      <img
        src="@/assets/profile.gif"
        alt="Profile Picture"
        class="profile-image"
      />
    </div>
  </section>
  <section class="mt-16 px-6">
    <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
    <RcsResponsiveSlider :items="projects" link="./HomeView.vue" />
  </section>
  <RcsSpacer size="44" />
  <section class="skills-section mt-16 px-6">
    <h2 class="text-3xl font-bold mb-8 text-center">My Skills</h2>
    <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
      <RcsProficiencyBar skill="C#" :level="85" />
      <RcsProficiencyBar skill="Vue.js" :level="60" />
      <RcsProficiencyBar skill="Python" :level="60" />
      <RcsProficiencyBar skill="Git" :level="85" />
      <RcsProficiencyBar skill="JavaScript" :level="50" />
      <RcsProficiencyBar skill="Node.js" :level="40" />
      <RcsProficiencyBar skill="TypeScript" :level="37" />  
      <RcsProficiencyBar skill="SQL" :level="75" /> 
      <RcsProficiencyBar skill="PHP" :level="40" />
      <RcsProficiencyBar skill="Unity" :level="30" />
    </div>
  </section>
  <RcsSpacer size="44" />
</template>

<script setup>
import RcsProficiencyBar from '@/components/RcsProficiencyBar/RcsProficiencyBar.vue';
import RcsResponsiveSlider from "@/components/RcsResponsiveSlider/RcsResponsiveSlider.vue";
import RcsSpacer from '@/components/RcsSpacer/RcsSpacer.vue';

import { projects } from '@/data/projects';

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
  @apply flex gap-4 flex-wrap justify-center md:justify-start;
}

.profile-image {
  @apply w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg flex-shrink-0;
}

.btn-primary {
  @apply px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full transition;
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

</style>