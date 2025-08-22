<template>
  <section class="project-section">
    <div class="project-header">
      <h1 class="project-title">My Projects</h1>
      <p class="project-intro">
        Unfortunately, most of my early projects weren’t saved on GitHub and were lost. 
        But now, I always use Git. Here are some of the projects I've worked on.
      </p>

      <div class="project-counter-wrapper">    
        <p class="project-counter">{{ projects.length }}+</p>
      </div>
      <p class="project-counter-label">Tamamlanan projeler</p>
    </div>
  </section>

  <section>
    <div class="project-grid">
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
  @apply text-4xl font-bold mb-8;
}

.project-intro {
  @apply text-lg md:text-xl max-w-xl mb-10;
}

.project-counter-wrapper {
  @apply flex justify-center items-center gap-4 mb-0;
}

.project-counter {
  @apply text-3xl font-bold max-w-xl mb-2 border-b-2 border-indigo-400;
}

.project-counter-label {
  @apply text-gray-300 max-w-xl mb-6 pb-2;
}

.project-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-24;
}
</style>
