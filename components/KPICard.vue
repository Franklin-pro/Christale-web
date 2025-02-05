<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h3 class="text-gray-500 dark:text-gray-500 font-bold text-md mb-2">{{ label }}</h3>
    <div class="flex items-center justify-between">
      <span class="text-2xl text-gray-500 font-semibold">{{ value }}</span>
      <div 
        class="px-2 py-1 rounded text-sm"
        :class="growthClass"
      >
        {{ growth }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string | number;
  growth: number;
}>();

const growthClass = computed(() => ({
  'bg-green-100 text-green-800': props.growth > 0,
  'bg-yellow-100 text-yellow-800': props.growth < 0,
}));
</script>