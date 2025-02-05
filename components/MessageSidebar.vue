<template>
  <div class="w-64 bg-white border-r border-gray-200 h-screen">
    <div class="p-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search contacts"
          class="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span class="absolute left-3 top-2.5 text-gray-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </div>

    <div class="px-2">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '~/types';


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
  // Add more online users here
];

const offlineUsers: User[] = [
  {
    id: '5',
    name: 'Marie Fuller',
    avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
    status: 'offline',
    lastMessage: 'How did you just...'
  },
  // Add more offline users here
];
</script>