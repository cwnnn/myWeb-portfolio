<template>
  <div class="bar-wrapper">
    <div class="bar">
      <span class="bar-skill">{{ skill }}</span>
      <span class="bar-lvl">{{ level }}%</span>
    </div>

    <div class="bar-bg glow-bar" ref="barRef">
      <!-- İç bar: barCycleX ile senkronize -->
      <div
        class="bar-front glow-fill"
        :style="{
          width: `${barCycleX}%`,
          transition: isDragging ? 'none' : 'width 0.3s ease-out',
        }"
      ></div>

      <!-- Hareket ettirilebilen daire -->
      <div
        class="bar-cycle glow-dot"
        :class="{ active: isActive }"
        :style="{
          left: `calc(${barCycleX}% - 8px)`,
          transition: isDragging ? 'none' : 'left 0.3s ease-out',
        }"
        @mousedown="handleMouseDown"
        @click="toggleActive"
      ></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  skill: string
  level: number
  
}>()

const isActive = ref(false)
const isDragging = ref(false)
const barCycleX = ref(0)
const rebound = ref(0)
const barRef = ref<HTMLElement | null>(null)
const defaultLeft = ref(0)

function toggleActive() {
  isActive.value = !isActive.value
}

// Bar doluluk oranına göre default pozisyonu hesapla
onMounted(() => {
  defaultLeft.value = props.level
  barCycleX.value = props.level
  rebound.value= props.level
})

function handleMouseDown(e: MouseEvent) {
  isDragging.value = true
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(e: MouseEvent) {
  if (!isDragging.value || !barRef.value) return

  const rect = barRef.value.getBoundingClientRect()
  const offsetX = e.clientX - rect.left
  const percentage = (offsetX / rect.width) * 100

  // 0 ile 100 arasında sınırla
  barCycleX.value = Math.min(100, Math.max(0, percentage))
}

function handleMouseUp() {
  isDragging.value = false
  const notr = ref(0) //buradaki -1 ya da +1 tanımlayıp sonrasında bunu çarpıp normal değerden çıkarıcam atık bir kat sayıyı(yay efekti için)

  if(defaultLeft.value + 0.4*(defaultLeft.value-barCycleX.value)>100){
    rebound.value = 100
  }
  else if(defaultLeft.value + 0.4*(defaultLeft.value-barCycleX.value)<0){
    rebound.value = 0
  }
  else{
    rebound.value = defaultLeft.value + 0.4*(defaultLeft.value-barCycleX.value)
  }
  
  

  barCycleX.value = rebound.value

  
  setTimeout(() => {
    barCycleX.value = defaultLeft.value
  }, 300);

  

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>


<style scoped src="./RcsProficiencyBar.css"></style>