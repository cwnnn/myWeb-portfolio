<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  const c = canvas.value;
  const ctx = c.getContext("2d");

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  let flakes = Array.from({ length: 100 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 3 + 1,
    d: Math.random() + 1,
  }));

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";

    flakes.forEach((f) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
      f.y += f.d;
      if (f.y > c.height) f.y = 0;
    });

    requestAnimationFrame(draw);
  }

  draw();
});
</script>

<style>
canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
