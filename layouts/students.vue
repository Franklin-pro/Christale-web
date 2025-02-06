<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-4">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <nav class="mt-6">
        <ul>
          <li class="mb-2">
            <a href="#" class="block p-2 hover:bg-gray-700">Courses</a>
          </li>
          <li class="mb-2">
            <a href="#" class="block p-2 hover:bg-gray-700">My Learning</a>
          </li>
          <li class="mb-2">
            <a href="#" class="block p-2 hover:bg-gray-700">Performance</a>
          </li>
          <li class="mb-2">
            <a href="#" class="block p-2 hover:bg-gray-700">Target Audience</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// TypeScript setup
</script>