<template>
  <section class="project-section">
    <div class="project-header">
      <h1 class="project-title">My Projects</h1>
      <div class="w-20 h-1 mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
      <p class="project-intro">
        Unfortunately, most of my early projects weren’t saved on GitHub and were lost. 
        But now, I always use Git. Here are some of the projects I've worked on.
      </p>

      <div class="project-counter-wrapper">    
        <p class="project-counter">{{ projects.length }}+</p>
      </div>
      <p class="project-counter-label">Completed Projects</p>
    </div>
  </section>
  
  <section>
    <div :class="[
      'project-flex',

    ]">
      <RcsProjectCard
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :to="project.to"
        :title="project.title"
        :shortDesc="project.shortDesc"
        :img="project.img"
      />
    </div>
  </section>

  <RcsSpacer size="24" />
</template>

<script setup>
import { projects } from '@/data/projects';
import RcsProjectCard from '../components/RcsProjectCard/RcsProjectCard.vue';
import RcsSpacer from '../components/RcsSpacer/RcsSpacer.vue';


</script>

<style scoped>
@reference "tailwindcss/theme.css";

.project-section {
  @apply flex items-center justify-center px-6 py-26;
}

.project-header {
  @apply text-center;
}

.project-title {
  @apply text-4xl font-bold mb-3;
}

.project-intro {
  @apply text-lg md:text-xl max-w-xl mb-10;
}

.project-counter-wrapper {
  @apply flex justify-center items-center gap-4 mb-0;
}

.project-counter {
  @apply text-3xl font-bold text-fuchsia-500 mb-2;
}

.project-counter-label {
  @apply text-gray-400 text-sm;
}

.project-flex {
  @apply flex flex-wrap justify-center gap-6 mx-auto px-4;
}

.project-flex > * {
  @apply w-full sm:w-[31%] mb-6;
}



</style>
