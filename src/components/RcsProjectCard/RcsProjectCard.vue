<template>
  <div
    :id="props.id"
    class="project-card"
    @click="goToDetail"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :style="props.style"
    :class="props.class"
  >
    <img
      v-if="props.img"
      :src="props.img"
      :alt="props.title || 'Project image'"
      class="project-card-image"
    />

    <div class="project-card-gradient-overlay"></div>

    <div v-if="isHovered" class="project-card-hover-content">
      <h3 class="project-card-title">
        <slot name="title">{{ props.title }}</slot>
      </h3>
      <p class="project-card-description">
        <slot name="desc">{{ props.shortDesc }}</slot>
      </p>
    </div>

    <div v-else class="project-card-static-content">
      <h3 class="project-card-title">
        <slot name="title">{{ props.title }}</slot>
      </h3>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps, ref, withDefaults } from 'vue';
import { useRouter } from 'vue-router';
import type { RcsProjectCardProps } from './RcsProjectCard.interface';

const props = withDefaults(defineProps<RcsProjectCardProps>(), {
  img: '',
});

const isHovered = ref(false);

const router = useRouter();
const goToDetail = () => {
  router.push(`/projects/${props.to}`);
};
</script>

<style scoped src="./RcsProjectCard.css"></style>