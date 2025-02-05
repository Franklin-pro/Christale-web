<template>
  <div class="">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <div v-for="(item, index) in items" :key="index">
        <KPICard :label="item.title" :value="item.value" :growth="item.growth" />
      </div>
    </div>
    <div class="flex py-3 gap-5">
      <GrowthChart />
      <AnalyticsPieChart />
    </div>
    <div>
      <RecentActivityTable />
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard'
})
const items = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    growth: '12.5',
  },
  {
    title: 'Subscribers',
    value: '+2350',
    growth: '12.5',
  },
  {
    title: 'Sales',
    value: '+12,234',
    growth: '12.5',
  },
  {
    title: 'Active Users',
    value: '1,234',
    growth: '12.5',
  }
]


</script>

<style></style>