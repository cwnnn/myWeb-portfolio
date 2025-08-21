<template>
  <div class="rcs-spacer "
  :class="[
  `vertical-${props.size}`
  ]"
  >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { RcsSpacerProps } from './RcsSpacerinterface';

const props = withDefaults(defineProps<RcsSpacerProps>(), {
  size: '12',
});
</script>

<style scoped src="./RcsSpacer.css"></style>
