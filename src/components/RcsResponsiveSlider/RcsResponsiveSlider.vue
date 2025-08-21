<template>
  <div class="rcs-slider">
    <!-- Slides (Stacked & Offset) -->
    <div class="rcs-slider--slides">
      <div
        v-for="n in 5"
        :key="n"
        class="rcs-slider--card-wrapper"
        :style="getCardStyle(n - 3)"
      >
        <router-link
          :to="items[getIndex(n - 3)].link"
          class="rcs-slider--card"
        >
          <img
            :src="items[getIndex(n - 3)].img"
            class="rcs-slider--img"
            alt="item"
          />
          <div class="rcs-slider--info">
            <h2 class="rcs-slider--title">{{ items[getIndex(n - 3)].title }}</h2>
            <p class="rcs-slider--desc">{{ items[getIndex(n - 3)].desc }}</p>
            <p v-if="items[getIndex(n - 3)].meta" class="rcs-slider--meta">{{ items[getIndex(n - 3)].meta }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Controls -->
    <div class="rcs-slider--controls">
      <button 
        @click="prevSlide" 
        class="rcs-slider--arrow">
       <i class="fa-solid fa-left-long"></i>
      </button>
      <div class="rcs-slider--dots">
        <button v-for="(item, i) in items" :key="i"
                @click="goToSlide(i)"
                class="rcs-slider--dot"
                :class="i === activeIndex ? 'rcs-slider--dot-active' : ''">
        </button>
      </div>
      <button 
        @click="nextSlide" 
        class="rcs-slider--arrow">
       <i class="fa-solid fa-right-long"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const activeIndex = ref(0)

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.items.length
}

const prevSlide = () => {
  activeIndex.value = 
    (activeIndex.value - 1 + props.items.length) % props.items.length
}

const goToSlide = (i) => {
  activeIndex.value = i
}

// Döngüsel index hesaplama
const getIndex = (offset) => {
  const len = props.items.length
  return (activeIndex.value + offset + len) % len
}

// Kartların pozisyonunu ve stilini ayarlayan fonksiyon
const getCardStyle = (offset) => {
  // offset: -2, -1, 0, 1, 2
  const zIndexes = [2, 5, 10, 5, 2]
  const opacities = [0.5, 0.7, 1, 0.7, 0.5]
  const scales = [0.88, 0.94, 1, 0.94, 0.88]
  const translates = [-560, -280, 0, 280, 560] // px

  const idx = offset + 2 // -2 => 0, -1 => 1, 0 => 2, 1 => 3, 2 => 4

  return {
    zIndex: zIndexes[idx],
    opacity: opacities[idx],
    transform: `scale(${scales[idx]}) translateX(${translates[idx]}px)`
  }
}

// Otomatik kaydırma için interval
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped src="./RcsResponsiveSlider.css"></style>
