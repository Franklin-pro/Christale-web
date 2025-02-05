<template>
  <div class="flex  min-h-screen bg-gray-200">
    <!-- Sidebar -->
    <aside 
      class="w-72 bg-gray-50  h-screen fixed top-0 left-0 text-white p-6 lg:w-72 lg:block lg:h-auto lg:static lg:border-r lg:border-gray-200 lg:overflow-auto"
      :class="{'max-sm:hidden nav-hidden lg:block': !isSidebarVisible}"
    >
      <div class="flex items-center gap-2 mb-8">
        <span class="text-xl text-blue-700 font-semibold">User Messages</span>
      </div>

      <!-- Navigation -->
      <nav class="space-y-4">
        <div class="text-sm font-medium text-gray-500 px-2 py-2">Online</div>
        <div class="space-y-1">
          <div v-for="user in onlineUsers" :key="user.id"
            class="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div class="relative">
              <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full">
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ user.name }}</p>
              <p class="text-sm text-gray-500 truncate">{{ user.lastMessage }}</p>
            </div>
          </div>
        </div>

        <div class="text-sm font-medium text-gray-500 px-2 py-2 mt-4">Offline</div>
        <div class="space-y-1">
          <div v-for="user in offlineUsers" :key="user.id"
            class="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div class="relative">
              <img :src="user.avatar" :alt="user.name" class="w-10 h-10 rounded-full">
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-red-400 border-2 border-white rounded-full"></div>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ user.name }}</p>
              <p class="text-sm text-gray-500 truncate">{{ user.lastMessage }}</p>
            </div>
          </div>
        </div>
      </nav>

      <!-- Logout Button -->
      <div class="absolute bottom-6 left-6 lg:static lg:bottom-auto">
        <button 
          @click="logout" 
          class="flex items-center gap-3 p-2  transition-colors duration-200"
        >
          <UIcon name="i-heroicons-cog-8-tooth"/>
          <span>Setting</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main :class="{'ml-64': isSidebarVisible, 'ml-0': !isSidebarVisible}" class="flex-1 p-6 space-y-4">
      <div class="lg:hidden flex justify-between items-center mb-4">
        <button @click="toggleSidebar" class="p-2 text-gray-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  FileText,
  Headphones,
  Settings,
  LogOut
} from 'lucide-vue-next'
import type { User } from '~/types'

const isSidebarVisible = ref(true) // State to control sidebar visibility on small screens

const onlineUsers: User[] = [
  {
    id: '1',
    name: 'Brittany Delgado',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    status: 'online',
    lastMessage: 'Hey, where is that pho...',
  },
  {
    id: '2',
    name: 'Marie Fuller',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=3',
    status: 'online',
    lastMessage: 'How did you just...'
  },
  {
    id: '3',
    name: 'Brittany Delgado',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=2',
    status: 'online',
    lastMessage: 'Hey, where is that pho...'
  },
  {
    id: '4',
    name: 'Marie Fuller',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=1',
    status: 'online',
    lastMessage: 'How did you just...'
  },
]

const offlineUsers: User[] = [
  {
    id: '5',
    name: 'Marie Fuller',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    status: 'offline',
    lastMessage: 'How did you just...'
  },
]

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

const logout = () => {
  // Implement logout logic
  console.log('Logout clicked')
}
</script>
<style scoped>
@media screen and (max-width: 1023px) {
  .nav-hidden{
    display: none;
  }
}
</style>

