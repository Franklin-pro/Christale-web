<template>
<main class="flex-1 p-6">
      <!-- Header -->
      <header class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">Course Activity</h2>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">+</button>
          <div class="flex items-center">
            <span class="mr-2">Wesley Matthews</span>
            <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      <!-- Courses Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-blue-500 text-white rounded-lg">How to grow your Facebook Page (12 Enrolled)</div>
        <div class="p-4 bg-purple-500 text-white rounded-lg">Grow your Community (7 Enrolled)</div>
        <div class="p-4 bg-yellow-500 text-white rounded-lg">Data Science Bootcamp (17 Full)</div>
        <div class="p-4 bg-red-500 text-white rounded-lg">Target Audience Training (21 Full)</div>
      </section>

      <!-- My Learning & Planning -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div class="p-4 border shadow-lg rounded-lg">
          <h3 class="font-semibold mb-4">My Learning</h3>
          <ul>
            <li class="mb-2">Target Audience Training (53%)</li>
            <li class="mb-2">The Complete Web Development (75%)</li>
            <li>Grow your Community (14%)</li>
          </ul>
        </div>
        <div class="p-4 border shadow-lg rounded-lg">
          <h3 class="font-semibold mb-4">Planning</h3>
          <p>This week's schedule</p>
        </div>
      </section>
    </main>
</template>

<script setup lang="ts">
// TypeScript setup

definePageMeta({
  layout: 'students',
});
</script>