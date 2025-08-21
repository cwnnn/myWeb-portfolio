<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { ProficiencyBarProps } from './RcsProficiencyBar.interface'

const props = defineProps<ProficiencyBarProps>()

const isActive = ref(false)
const isDragging = ref(false)
const barCycleX = ref(0)
const rebound = ref(0)
const barRef = ref<HTMLElement | null>(null)
const defaultLeft = ref(0)

function toggleActive() {
  isActive.value = !isActive.value
}

onMounted(() => {
  defaultLeft.value = props.level
  barCycleX.value = props.level
  rebound.value = props.level
})

function handlePointerDown(e: PointerEvent) {
  isDragging.value = true
  document.addEventListener('pointermove', handlePointerMove)
  document.addEventListener('pointerup', handlePointerUp, { once: true })
} 

function handlePointerMove(e: PointerEvent) {
  if (!isDragging.value || !barRef.value) return
  const rect = barRef.value.getBoundingClientRect()
  const offsetX = e.clientX - rect.left
  const percentage = (offsetX / rect.width) * 100
  barCycleX.value = Math.min(100, Math.max(0, percentage))
}

function handlePointerUp() {
  isDragging.value = false

  const reboundValue = defaultLeft.value + 0.4 * (defaultLeft.value - barCycleX.value)
  rebound.value = Math.min(100, Math.max(0, reboundValue))

  barCycleX.value = rebound.value

  setTimeout(() => {
    barCycleX.value = defaultLeft.value
  }, 300)

  document.removeEventListener('pointermove', handlePointerMove)
}

onBeforeUnmount(() => {
  document.removeEventListener('pointermove', handlePointerMove)
})
</script>

<template>
  <div
    class="bar-wrapper"
    :id="props.id"
    :class="['bar-wrapper', props.class]"
    :style="props.style"
  >
    <div class="bar">
      <span class="bar-skill">{{ props.skill }}</span>
      <span class="bar-lvl">{{ props.level }}%</span>
    </div>

    <div class="bar-bg glow-bar" ref="barRef">
      <div
        class="bar-front glow-fill"
        :style="{
          width: `${barCycleX}%`,
          transition: isDragging ? 'none' : 'width 0.3s ease-out',
        }"
      ></div>

      <div
        class="bar-cycle glow-dot"
        :class="{ active: isActive }"
        :style="{
          left: `calc(${barCycleX}% - 8px)`,
          transition: isDragging ? 'none' : 'left 0.3s ease-out',
        }"
        @pointerdown="handlePointerDown"
        @click="toggleActive"
      ></div>
    </div>
  </div>
</template>

<style scoped src="./RcsProficiencyBar.css"></style>
