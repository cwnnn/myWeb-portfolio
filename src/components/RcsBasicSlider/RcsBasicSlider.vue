<template>
  <div class="relative w-full max-w-3xl mx-auto select-none">
    <div
      class="overflow-hidden relative"
      @mousedown="startDrag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @mousemove="onDrag"
      @touchstart="startDrag"
      @touchend="endDrag"
      @touchmove="onDrag"
    >
      <div
        class="flex transition-transform duration-300 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex-shrink-0 w-full"
        >
          <img
            :src="image"
            class="w-full h-auto object-contain rounded-lg cursor-pointer"
            draggable="false"
          />
        </div>
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute -left-8 top-1/2 -translate-y-1/2 text-white text-4xl rounded-full p-2 hover:bg-white hover:text-black z-10 transition-colors"
    >
      <i class="fas fa-chevron-left"></i>
    </button>

    <button
      @click="nextSlide"
      class="absolute -right-8 top-1/2 -translate-y-1/2 text-white text-4xl rounded-full p-2 hover:bg-white hover:text-black z-10 transition-colors"
    >
      <i class="fas fa-chevron-right"></i>
    </button>

    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(image, index) in images"
        :key="'dot-' + index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full hover:scale-125',
          currentIndex === index ? 'bg-white' : 'bg-gray-400'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  img: String,
  img2: String,
  img3: String,
  img4: String,
  img5: String,
});

const images = computed(() =>
  [props.img, props.img2, props.img3, props.img4, props.img5].filter(Boolean)
);

const currentIndex = ref(0);

function prevSlide() {
  currentIndex.value =
    currentIndex.value === 0 ? images.value.length - 1 : currentIndex.value - 1;
}

function nextSlide() {
  currentIndex.value =
    currentIndex.value === images.value.length - 1 ? 0 : currentIndex.value + 1;
}

function goToSlide(index) {
  currentIndex.value = index;
}

let startX = 0;
let isDragging = false;

function startDrag(e) {
  isDragging = true;
  startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
}

function endDrag(e) {
  if (!isDragging) return;
  const endX = e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (diff > 50) prevSlide();
  else if (diff < -50) nextSlide();
  isDragging = false;
}

function onDrag(e) {
  if (!isDragging) return;
  e.preventDefault();
}
</script>
