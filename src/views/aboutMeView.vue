<template>
  <div class="min-h-screen text-white">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <!-- Profile Image -->
          <div class="relative group">
            <div class="hero-profile-image">
              <img 
                src="../assets/myProfile.jpeg"
                alt="Profile Picture" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Hero Text -->
          <div class="hero-text">
            <div class="mb-4">
              <span class="text-gray-400 text-lg font-medium">Hi, I'm</span>
              <h1 class="hero-name">
                Resul Can Şık
              </h1>
            </div>
            <p class="hero-title">Full Stack Developer</p>
            <div class="hero-availability">
              <div class="hero-availability-dot"></div>
              Available for new projects
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Personal Info -->
    <section class="about-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="about-title">Who Am I?</h2>
          <div class="about-divider"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Personal Info -->
          <div class="personal-info">
            <div class="personal-info-header">
              <h3 class="personal-info-title">Personal Information</h3>
              <div class="space-y-3 text-gray-300">
                <div class="personal-info-item">
                  <span class="font-medium text-indigo-400">Name:</span>
                  <span>{{ personalInfo.name }}</span>
                </div>
                <div class="personal-info-item">
                  <span class="font-medium text-indigo-400">Age:</span>
                  <span>{{ personalInfo.age }}</span>
                </div>
                <div class="personal-info-item">
                  <span class="font-medium text-indigo-400">Education:</span>
                  <span>{{ personalInfo.education }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="stats-grid">
            <div 
              v-for="stat in stats" 
              :key="stat.label"
              class="stats-card"
            >
              <div class="stats-number">{{ stat.number }}</div>
              <div class="stats-label">{{ stat.label }}</div>
            </div>
          </div>
          <RcsSpacer size="" />
        </div>

        <div class="personal-info-header border-fuchsia-500">
          <h3 class="personal-info-title">About Me</h3>
          <p class="text-gray-300 leading-relaxed">{{ aboutDescription }}</p>
        </div>
      </div>
    </section>

    <!-- Hobbies & Interests -->
    <section class="about-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="about-title">Hobbies & Interests</h2>
          <div class="about-divider"></div>
        </div>

        <div class="hobbies-grid">
          <div 
            v-for="hobby in hobbies" 
            :key="hobby.title"
            class="hobby-card"
          >
            <div class="hobby-icon">{{ hobby.icon }}</div>
            <h3 class="hobby-title">{{ hobby.title }}</h3>
            <p class="hobby-desc">{{ hobby.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="about-title">My Skills</h2>
          <div class="about-divider"></div>
        </div>

        <div class="px-4 sm:px-6 md:px-32">
          <div class="skills-card">
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
                v-for="item in skills" 
                :key="item.skill"
                class="skill-badge"
              >
                {{ item.skill }}
              </span> 
              <span v-for="item in ['HTML', 'CSS', 'TailWindCSS', 'PHP','Photoshop','Office']" class="skill-badge">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="about-section">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="about-title">My Experience</h2>
          <div class="about-divider"></div>
        </div>

        <div class="timeline-container">
          <div class="timeline-line"></div>
          
          <div class="space-y-8">
            <div 
              v-for="(exp, index) in experience" 
              :key="index"
              class="timeline-item"
              @click="setActiveTimeline(index)"
            >
              <div 
                class="timeline-marker"
                :class="activeTimelineIndex === index 
                  ? 'bg-fuchsia-500 border-fuchsia-400 shadow-lg shadow-fuchsia-500/50' 
                  : 'bg-gray-800 border-indigo-400 group-hover:border-fuchsia-500'"
              ></div>

              <div 
                class="timeline-content"
                :class="activeTimelineIndex === index 
                  ? 'border-fuchsia-500 bg-fuchsia-500/5' 
                  : 'border-gray-800 hover:border-indigo-400/50'"
              >
                <div class="flex flex-wrap justify-between items-start mb-3">
                  <div>
                    <h3 class="text-xl font-semibold text-white">{{ exp.title }}</h3>
                    <div class="text-indigo-400 font-medium">{{ exp.company }}</div>
                  </div>
                  <span class="timeline-label">{{ exp.date }}</span>
                </div>
                
                <p class="text-gray-300 mb-4">{{ exp.description }}</p>
                
                <div class="timeline-tags">
                  <span 
                    v-for="tag in exp.tags" 
                    :key="tag"
                    class="timeline-tag"
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

    <!-- Contact Section -->
    <section class="about-section">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="contact-card">
          <h2 class="contact-title">Contact Me!</h2>
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

</script>

<style scoped>
@reference "tailwindcss/theme.css";

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Icon Links */
.icon-link{
  @apply transition duration-300;
}

.contact-icon {
  @apply text-3xl px-2;
}

.icon-link:hover {
  @apply text-indigo-400 scale-110;
}

/* Hero Section */
.hero-section {
  @apply pt-20 pb-16;
}

.hero-profile-image {
  @apply w-72 h-72 rounded-full overflow-hidden border-4 border-indigo-400/30 shadow-2xl transition-transform duration-300 hover:scale-105;
}

.hero-text {
  @apply text-center lg:text-left;
}

.hero-name {
  @apply text-5xl lg:text-6xl font-bold mt-2 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent;
}

.hero-title {
  @apply text-xl text-gray-300 mb-6;
}

.hero-availability {
  @apply inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400;
}

.hero-availability-dot {
  @apply w-2 h-2 bg-green-500 rounded-full animate-pulse;
}

/* About Me Section */
.about-section {
  @apply py-16;
}

.about-title {
  @apply text-4xl font-bold text-white mb-4;
}

.about-divider {
  @apply w-20 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-fuchsia-500;
}

.personal-info {
  @apply space-y-6;
}

.personal-info-header {
  @apply border-l-4 border-indigo-400 pl-6;
}

.personal-info-title {
  @apply text-2xl font-semibold text-white mb-3;
}

.personal-info-item {
  @apply flex items-center gap-3 text-gray-300;
}

.stats-grid {
  @apply grid grid-cols-2 gap-4;
}

.stats-card {
  @apply text-center p-6 border border-gray-800 rounded-xl hover:border-indigo-400 transition-all duration-300;
}

.stats-number {
  @apply text-3xl font-bold text-fuchsia-500 mb-2;
}

.stats-label {
  @apply text-gray-400 text-sm;
}

/* Hobbies & Interests */
.hobbies-grid {
  @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.hobby-card {
  @apply  p-6 border border-gray-800 rounded-xl hover:border-indigo-400 transition-all duration-300;
}

.hobby-icon {
  @apply text-3xl mb-4;
}

.hobby-title {
  @apply text-xl font-semibold text-white mb-2;
}

.hobby-desc {
  @apply text-gray-400 text-sm;
}

/* Skills Section */
.skills-section {
  @apply py-16;
}

.skills-card {
  @apply border border-gray-800 rounded-xl p-6 hover:border-indigo-400 transition-all duration-300;
}

.skill-badge {
  @apply px-3 py-1 bg-gray-800 text-indigo-400 rounded-full text-sm border border-indigo-400/30 hover:bg-indigo-400/20 hover:scale-105 transition-all duration-200 cursor-default;
}

/* Experience Timeline */
.timeline-container {
  @apply relative;
}

.timeline-line {
  @apply absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-fuchsia-500;
}

.timeline-item {
  @apply relative pl-20 cursor-pointer;
}

.timeline-marker {
  @apply absolute left-4 w-8 h-8 rounded-full border-4 transition-all duration-300;
}

.timeline-content {
  @apply border rounded-xl p-6 transition-all duration-300;
}

.timeline-number {
  @apply text-3xl font-bold text-fuchsia-500 mb-2;
}

.timeline-label {
  @apply text-gray-400 text-sm;
}

.timeline-tags {
  @apply flex flex-wrap gap-2;
}

.timeline-tag {
  @apply px-2 py-1 bg-indigo-400/20 text-indigo-400 rounded text-xs border border-indigo-400/30;
}

/* Contact Section */
.contact-card {
  @apply text-center border border-gray-800 rounded-2xl p-12 hover:border-indigo-400 transition-all duration-300;
}

.contact-title {
  @apply text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent;
}

</style>
