<template>

  <div class="flex min-h-screen bg-gray-200">

    <!-- Sidebar -->
    <aside class="w-64 bg-black h-screen fixed left-0 top-0 text-white p-6">
      <!-- Logo -->
      <div class="flex items-center gap-2 mb-8">
        <svg
          viewBox="0 0 24 24"
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-xl text-blue-700 font-semibold">profitize</span>
      </div>

      <!-- Navigation -->
      <nav class="space-y-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-3 p-2 rounded text-gray-50 transition-colors duration-200 hover:bg-blue-500/10"
          :class="isActive ? 'bg-blue-500/10' : item.active"
        >
          <component :is="item.icon" class="h-5 w-5" />
          <span>{{ item.name }}</span>
        </NuxtLink>
      </nav>

      <!-- Logout Button -->
      <div class="absolute bottom-6 left-6">
        <button 
          @click="logout" 
          class="flex items-center gap-3  p-2 text-xl text-blue-500 font-semibold hover:text-white transition-colors duration-200"
        >
        <UIcon name="i-heroicons-cog-8-tooth"/>
          <span>Settings</span>
        </button>
      </div>
    </aside>
    <!-- End header -->
  

    <!-- Main Content -->
    <main class="ml-64 flex-1 p-6 space-y-4">
      <div class="bg-gray-100 flex items-center justify-between rounded-md p-4">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-medium text-black">OverView</h1>       
      </div>
      <div class="flex items-center gap-4">
        <div class="relative">
          <input
    v-model="grobalSearch"
    @keyup.enter="search"
    placeholder="Search..."
    class="bg-gray-100 border-2 p-1  text-black rounded-md border-gray-300 "
  />
  <UIcon name="i-heroicons-magnifying-glass-20-solid" class="text-xl  absolute right-2 top-2 text-gray-500 cursor-pointer"/>
        </div>

  <UChip text="3" size="2xl">
    <UIcon name="i-heroicons-bell-alert" class="text-2xl text-gray-700 cursor-pointer"/>
  </UChip>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
      </div>
     </div>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  LayoutDashboard,
  TrendingUp,
  Users,
  FileText,
  Headphones,
  Settings,
  LogOut
} from 'lucide-vue-next'

interface MenuItem {
  name: string
  path: string
  icon: any // Using 'any' for icon component type
  active?: boolean
}
const isActive = ref(false)

const menuItems: MenuItem[] = [
  { name: 'Overview', path: '/', icon: LayoutDashboard, active: true },
  { name: 'Growth', path: '/dashboard/growth', icon: TrendingUp },
  { name: 'Customers', path: '/dashboard/customers', icon: Users },
  { name: 'Course-Ma', path: '/dashboard/report', icon: FileText },
  { name: 'Progress', path: '/dashboard/progress', icon: TrendingUp },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
]

const grobalSearch = ref('')
const search = () => {
  grobalSearch.value = ''
  menuItems.forEach((item) => {
    item.active = false
  })
  isActive.value = false

  console.log('Search:', grobalSearch.value)
}

const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]

const logout = () => {
  // Implement logout logic
  console.log('Logout clicked')
}
</script>