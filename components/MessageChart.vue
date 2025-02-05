<template>
  <div class="flex-1 flex flex-col ">
    <div class="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="flex items-center">
          <h2 class="text-lg font-medium text-gray-900">Your message history with {{ currentChat?.name }}</h2>
        </div>
      </div>
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div v-for="message in messages" :key="message.id" 
        :class="['flex', message.senderId === currentUser.id ? 'justify-end' : 'justify-start']">
        <div :class="['max-w-md', message.senderId === currentUser.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900', 'rounded-lg px-4 py-2']">
          <p>{{ message.content }}</p>
          <p class="text-xs mt-1 opacity-75">{{ message.timestamp }}</p>
        </div>
      </div>
    </div>

    <div class="border-t absolute bottom-0  w-2/3 border-gray-200 px-4 py-3">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Your reply..."
          v-model="newMessage"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <UButton
         @click="send()" class="p-2 text-blue-600 hover:text-purple-700">
       <UIcon name="i-heroicons-paper-airplane" class="text-2xl"/>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message, User } from '~/types';

const currentUser = {
  id: '1',
  name: 'Current User'
};

const currentChat = ref<User>({
  id: '2',
  name: 'Brittany Delgado',
  avatar: '/placeholder/32/32',
  status: 'online'
});
const loading = ref(false);
const newMessage = ref('');

const messages: Message[] = [
  {
    id: '1',
    senderId: '2',
    content: "Hey, where is that photo of us from a couple of weekends ago? I've been trying to look for it on Facebook but can't find it anywhere!",
    timestamp: '08:24pm',
    seen: true
  },
  {
    id: '2',
    senderId: currentUser.id,
    content: "I found it on my phone, but I'm not sure if it's the right one. Can you please send it to me?",
    timestamp: '08:25pm',
    seen: true
  },
  {
    id: '3',
    senderId: '2',
    content: "Sure, I'll send it to you. Thanks!",
    timestamp: '08:26pm',
    seen: true
  }
  // Add more messages here
];

const send = () => {
  const newMessage: Message = {
    id: (messages.length + 1).toString(),
    senderId: currentUser.id,
    content: "New message content",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    seen: false
  };

  messages.push(newMessage);

};

</script>