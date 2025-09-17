<template>
  <div v-if="project" class="max-w-4xl mx-auto px-6 py-18" >
    
    <h1 class="text-4xl font-bold mb-3 text-center" v-motion-slide-visible-once-top :duration="1200"  >{{ project.title }}</h1>
    <div class="w-20 h-1 mb-6 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto" v-motion-slide-visible-once-top :duration="1200"></div>

    <p class="text-lg mb-2 text-center" v-motion-fade-visible-once :delay="400" :duration="1200">{{ project.shortDesc }}</p>

    <p class="text-lg mb-8 text-center" v-motion-fade-visible-once :delay="600" :duration="1200">{{ project.desc }}</p>

    <p v-if="project.TechnologiesUsed" class="text-lg mb-8 text-center" v-motion-fade-visible-once :delay="800" :duration="1200"><a class="font-5bold">Technologies used: </a>{{ project.TechnologiesUsed }}</p>

    <div class="flex justify-center gap-6" v-motion-fade-visible-once :delay="1000" :duration="1200">
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

    <div class="mb-8" v-motion-slide-visible-once-left :duration="1200">
      <RcsBasicSlider 
        :img="project.img" 
        :img2="project.img2" 
        :img3="project.img3" 
        :img4="project.img4" 
        :img5="project.img5"
      />
    </div>

    <RcsSpacer size="40" />

   <iframe  v-if="project.youtube" 
   v-motion-slide-visible-once-right :delay="1000" :duration="1200"
    class="rounded-xl w-full h-64 md:h-96"
    :src="project.youtube" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>



  </div>

  <div v-else class="text-center py-32">
    <p class="text-lg">Project not found.</p>
    <router-link to="/projects" class="text-indigo-400 hover:underline">Back to Projects</router-link>
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
