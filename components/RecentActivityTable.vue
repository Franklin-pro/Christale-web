<template>
  <div class="bg-white text-gray-800 p-6 rounded-lg shadow">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold">Recent Activity</h2>

    </div>
    <table class="w-full">
      <thead>
        <tr class="text-left text-gray-500">
          <th class="pb-4">Customer</th>
          <th class="pb-4">Status</th>
          <th class="pb-4">Order number</th>
          <th class="pb-4">Retained</th>
          <th class="pb-4 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in activities" :key="item.orderNumber" class="border-t">
          <td class="py-4 flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gray-200"></div>
            {{ item.customer }}
          </td>
          <td>
            <div class="flex items-center gap-2">
              <div class="px-2 py-1 rounded text-sm w-3 h-4"
            :class="getStatusClass(item.status)"></div>
            <span 
              class="px-2 py-1 rounded text-sm"
            >
              {{ item.status }}
            </span>
            </div>
         
          </td>
          <td>{{ item.orderNumber }}</td>
          <td>{{ item.timestamp }}</td>
          <td class="text-right">${{ item.amount.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { RecentActivity } from '~/types';

const timeframe = ref('24h')

const activities: RecentActivity[] = [
  {
    customer: 'Jenny Wilson',
    status: 'New Customer',
    orderNumber: '#0038160',
    timestamp: '1 min ago',
    amount: 123.40
  },
  {
    customer: 'Guy Hawkins',
    status: 'Signed up',
    orderNumber: '#0038159',
    timestamp: '5 min ago',
    amount: 79.99
  },
  {
    customer: 'Ralph Edwards',
    status: 'New Customer',
    orderNumber: '#0038158',
    timestamp: '24 min ago',
    amount: 217.30
  }
]

const getStatusClass = (status: string) => ({
  'bg-purple-100 text-purple-800': status === 'New Customer',
  'bg-green-100 text-green-800': status === 'Signed up'
})
</script>