<template>
  <div class="flex items-center justify-center min-h-screen px-4">
    <div class="flex flex-col md:flex-row items-center md:space-x-16 space-y-6 md:space-y-0 rounded-2xl shadow-lg">
      <!-- Uyarı Metni -->
      <div class="text-center md:text-left">
        <span class="bg-gradient-to-r from-red-500 to-indigo-400 bg-clip-text text-transparent text-3xl">404 - Page Not Found</span>
        <p class="text-gray-600 mt-2">
          Hey dude, looks like you’ve poked around the wrong place. No worries, just head back to the 
          <router-link to="/" class="text-indigo-500 hover:underline">
            homepage
          </router-link> 
          and try again!
        </p>
        <span class="text-gray-600 block mt-2">
           If anything went wrong, feel free to contact me.
        </span>
        <div class="mt-2 flex justify-center md:justify-start space-x-2">
          <a href="https://www.linkedin.com/in/resulcan" class="icon-link" target="_blank">
            <i class="fa-brands fa-linkedin-in contact-icon"></i>
          </a>
          <a href="https://github.com/cwnnn" class="icon-link" target="_blank">
            <i class="fa-brands fa-github contact-icon"></i>
          </a>
          <a href="mailto:resulcwn@gmail.com" class="icon-link" target="_blank">
            <i class="fa-regular fa-envelope contact-icon"></i>
          </a>
          <a href="https://www.instagram.com/resulcwn/#" class="icon-link" target="_blank">
            <i class="fa-brands fa-instagram contact-icon"></i>
          </a>
        </div>
      </div>

      <!-- Daire Resim -->
      <div class="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-400/30 shadow-2xl transition-transform duration-300 group-hover:scale-105">
        <img 
          src="../assets/profile.gif"
          alt="Profile Picture" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<style>
@reference "tailwindcss/theme.css";

.icon-link {
  @apply text-xl px-1 hover:text-indigo-500 transition-colors duration-200;
}

.contact-icon {
  @apply w-5 h-5;
}
</style>
