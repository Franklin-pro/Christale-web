<template>

  <div class="flex min-h-screen bg-gray-200">

    <!-- Sidebar -->
    <aside class="w-64 bg-gray-50 h-screen fixed left-0 top-0 text-white p-6">
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
          class="flex items-center gap-3 p-2 rounded text-gray-600 transition-colors duration-200 hover:bg-blue-500/10"
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
          class="flex items-center gap-3 p-2 text-red-400 hover:text-white transition-colors duration-200"
        >
          <LogOut class="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
    <!-- End header -->
  

    <!-- Main Content -->
    <main class="ml-64 flex-1 p-6 space-y-4">
      <div class="bg-gray-100 rounded-md p-4">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-black">OverView</h1>       
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
  { name: 'Reports', path: '/dashboard/report', icon: FileText },
  { name: 'Support', path: '/dashboard/support', icon: Headphones },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
]

const logout = () => {
  // Implement logout logic
  console.log('Logout clicked')
}
</script>