<template>
  <div v-if="project" class="max-w-4xl mx-auto px-6 py-18">
    
    <h1 class="text-4xl font-bold mb-6 text-center">{{ project.title }}</h1>

    <p class="text-lg mb-2 text-center">{{ project.shortDesc }}</p>

    <p class="text-lg mb-8 text-center">{{ project.desc }}</p>

    <p v-if="project.TechnologiesUsed" class="text-lg mb-8 text-center"><a class="font-5bold">Technologies used: </a>{{ project.TechnologiesUsed }}</p>

    <div class="flex justify-center gap-6">
      <a 
        v-if="project.github" 
        :href="project.github" 
        target="_blank" 
        class="px-6 py-3 bg-indigo-400 text-white rounded-lg hover:bg-white hover:text-indigo-400 hover:scale-105 transition"
      >
        GitHub
      </a>
      <a 
        v-if="project.demo" 
        :href="project.demo" 
        target="_blank" 
        class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-white hover:text-black hover:scale-105 transition"
      >
        Live Demo
      </a>
    </div>

    <RcsSpacer size="12" />

    <div class="mb-8">
      <RcsBasicSlider 
        :img="project.img" 
        :img2="project.img2" 
        :img3="project.img3" 
        :img4="project.img4" 
        :img5="project.img5"
      />
    </div>

    <RcsSpacer size="20" />

   <iframe  v-if="project.youtube"
    class="rounded-xl"
    width="848" 
    height="500" 
    :src="project.youtube" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



  </div>

  <div v-else class="text-center py-12">
    <p class="text-lg">Project not found.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { projects } from "../data/projects"
import RcsBasicSlider from "../components/RcsBasicSlider/RcsBasicSlider.vue"
import RcsSpacer from "../components/RcsSpacer/RcsSpacer.vue"

const route = useRoute()
const project = projects.find(p => p.to === route.params.to)
</script>
