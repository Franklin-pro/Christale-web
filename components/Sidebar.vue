// components/Sidebar.vue
<template>
  <aside class="w-64 bg-[#1C1C28] h-screen fixed left-0 top-0 text-white p-6">
    <div class="flex items-center gap-2 mb-8">
      <!-- Replace image with inline SVG -->
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
      <span class="text-xl font-semibold">profitize</span>
    </div>
    
    <nav class="space-y-4">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="flex items-center gap-3 p-2 rounded hover:bg-white/10"
        :class="{ 'bg-white/10': item.active }"
      >
        <component :is="item.icon" class="h-5 w-5" />
        <span>{{ item.name }}</span>
      </router-link>
    </nav>
    
    <div class="absolute bottom-6 left-6">
      <button @click="logout" class="flex items-center gap-3 p-2 text-gray-400 hover:text-white">
        <LogOut class="h-5 w-5" />
        <span>Log out</span>
      </button>
    </div>
  </aside>
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

const menuItems = [
  { name: 'Overview', path: '/', icon: LayoutDashboard, active: true },
  { name: 'Growth', path: '/growth', icon: TrendingUp },
  { name: 'Customers', path: '/customers', icon: Users },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Support', path: '/support', icon: Headphones },
  { name: 'Settings', path: '/settings', icon: Settings },
]

const logout = () => {
  // Implement logout logic
}
</script>