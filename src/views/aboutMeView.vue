<template>
  <div class="min-h-screen text-white">
    <!-- Hero Section -->
    <section class="pt-20 pb-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Profile Image -->
          <div class="relative group">
            <div class="w-72 h-72 rounded-full overflow-hidden border-4 border-indigo-400/30 shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <img 
                src="../assets/myProfile.jpeg"
                alt="Profile Picture" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Hero Text -->
          <div class="text-center lg:text-left">
            <div class="mb-4">
              <span class="text-gray-400 text-lg font-medium">Hi, I'm</span>
              <h1 class="text-5xl lg:text-6xl font-bold text-white mt-2">
                <span class="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Resul Can Şık
                </span>
              </h1>
            </div>
            <p class="text-xl text-gray-300 mb-6">Full Stack Developer</p>
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new projects
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Personal Info -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">Who Am I?</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Personal Info -->
          <div class="space-y-6">
            <div class="border-l-4 border-indigo-400 pl-6">
              <h3 class="text-2xl font-semibold text-white mb-3">Personal Information</h3>
              <div class="space-y-3 text-gray-300">
                <div class="flex items-center gap-3">
                  <span class="font-medium text-indigo-400">Name:</span>
                  <span>{{ personalInfo.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="font-medium text-indigo-400">Age:</span>
                  <span>{{ personalInfo.age }}</span>
                </div>

                <div class="flex items-center gap-3">
                  <span class="font-medium text-indigo-400">Education:</span>
                  <span>{{ personalInfo.education }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="stat in stats" 
              :key="stat.label"
              class="text-center p-6 border border-gray-800 rounded-xl hover:border-indigo-400 transition-all duration-300"
            >
              <div class="text-3xl font-bold text-fuchsia-500 mb-2">{{ stat.number }}</div>
              <div class="text-gray-400 text-sm">{{ stat.label }}</div>
            </div>
          </div>
          <RcsSpacer size="" />
        </div>
          <div class="border-l-4 border-fuchsia-500 pl-6 ">
              <h3 class="text-2xl font-semibold text-white mb-3">About Me</h3>
              <p class="text-gray-300 leading-relaxed">{{ aboutDescription }}</p>
            </div>
      </div>
    </section>

    <!-- Hobbies & Interests -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">Hobbies & Interests</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="hobby in hobbies" 
            :key="hobby.title"
            class="group p-6 border border-gray-800 rounded-xl hover:border-indigo-400 transition-all duration-300"
          >
            <div class="text-3xl mb-4">{{ hobby.icon }}</div>
            <h3 class="text-xl font-semibold text-white mb-2">{{ hobby.title }}</h3>
            <p class="text-gray-400 text-sm">{{ hobby.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">My Skills</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
        </div>

        <div class="px-32">
          <div 
            class="border border-gray-800 rounded-xl p-6 hover:border-indigo-400 transition-all duration-300"
          >
            <div class="flex flex-wrap gap-2 justify-center ">
              <span 
                v-for="item in skills" 
                :key="item.skill"
                class="px-3 py-1 bg-gray-800 text-indigo-400 rounded-full text-sm border border-indigo-400/30 hover:bg-indigo-400/20 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {{ item.skill }}
              </span> 
              <span v-for="item in ['HTML', 'CSS', 'TailWindCSS', 'PHP','Photoshop','Office']" class="px-3 py-1 bg-gray-800 text-indigo-400 rounded-full text-sm border border-indigo-400/30 hover:bg-indigo-400/20 hover:scale-105 transition-all duration-200 cursor-default">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-white mb-4">My Experience</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-indigo-400 to-fuchsia-500 mx-auto"></div>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-fuchsia-500"></div>
          
          <div class="space-y-8">
            <div 
              v-for="(exp, index) in experience" 
              :key="index"
              class="relative pl-20 group cursor-pointer"
              @click="setActiveTimeline(index)"
            >
              <!-- Timeline marker -->
              <div 
                class="absolute left-4 w-8 h-8 rounded-full border-4 transition-all duration-300"
                :class="activeTimelineIndex === index 
                  ? 'bg-fuchsia-500 border-fuchsia-400 shadow-lg shadow-fuchsia-500/50' 
                  : 'bg-gray-800 border-indigo-400 group-hover:border-fuchsia-500'"
              ></div>

              <!-- Content -->
              <div 
                class="border rounded-xl p-6 transition-all duration-300"
                :class="activeTimelineIndex === index 
                  ? 'border-fuchsia-500 bg-fuchsia-500/5' 
                  : 'border-gray-800 hover:border-indigo-400/50'"
              >
                <div class="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 class="text-xl font-semibold text-white">{{ exp.title }}</h3>
                    <div class="text-indigo-400 font-medium">{{ exp.company }}</div>
                  </div>
                  <span class="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{{ exp.date }}</span>
                </div>
                
                <p class="text-gray-300 mb-4">{{ exp.description }}</p>
                
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in exp.tags" 
                    :key="tag"
                    class="px-2 py-1 bg-indigo-400/20 text-indigo-400 rounded text-xs border border-indigo-400/30"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center border border-gray-800 rounded-2xl p-12 hover:border-indigo-400 transition-all duration-300">
          <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">Contact Me!</h2>

          <RcsSpacer size="8" />

             <a href="https://www.linkedin.com/in/resulcan" class="icon-link"  target="_blank">
              <i class="fa-brands fa-linkedin-in contact-icon"></i>
            </a>
            <a href="https://github.com/cwnnn" class="icon-link" target="_blank">
              <i class="fa-brands fa-github contact-icon"></i>
            </a>
            <a href="mailto:resulcwn@gmail.com" class="icon-link"  target="_blank">
              <i class="fa-regular fa-envelope contact-icon"></i>
            </a>
            <a href="https://www.instagram.com/resulcwn/#" class="icon-link" target="_blank">
              <i class="fa-brands fa-instagram contact-icon"></i>
            </a>

        </div>
      </div>
    </section>
    <!-- Contact CTA -->
     <!--
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center border border-gray-800 rounded-2xl p-12 hover:border-indigo-400 transition-all duration-300">
          <h2 class="text-4xl font-bold text-white mb-4">Let's Work Together!</h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a new project in mind? Let's talk and create something amazing together.
          </p>
          <button 
            @click="scrollToContact"
            class="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-400 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get In Touch
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
    -->
  </div>
</template>


<script setup >
import { ref, onMounted } from 'vue'
import RcsSpacer from '../components/RcsSpacer/RcsSpacer.vue';
import { personalInfo, aboutDescription, stats, hobbies, skills, experience } from "@/data/AboutMe";

    const activeTimelineIndex = ref(null)


const setActiveTimeline = (index) => {
      activeTimelineIndex.value = index
    }

    const scrollToContact = () => {
      // Navigation to contact page using router
      // this.$router.push('/contact')
      console.log('Navigate to contact page')
    }

    onMounted(() => {
      console.log('AboutMe page loaded')
    })

</script>

<style scoped>
@reference "tailwindcss/theme.css";

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.icon-link{
  @apply transition duration-300;
}

.contact-icon {
  @apply text-3xl px-2;
}

.icon-link:hover {
  @apply text-indigo-400 scale-110;
}
</style>