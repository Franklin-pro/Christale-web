<template>
  <div class="bg-gray-50 p-6 rounded-lg w-[50%] shadow">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl text-gray-800 font-semibold">This Year Growth</h2>
      <select v-model="dateRange" class="border rounded p-2">
        <option value="jan-aug">Jan 08 - Aug 08</option>
      </select>
    </div>
    <Bar :data="chartData" />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const dateRange = ref('jan-aug')

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: '2021',
      data: [40000, 45000, 35000, 35000, 25000, 35000, 45000, 35000],
      backgroundColor: '#1C1C28',
    },
    {
      label: '2022',
      data: [45000, 55000, 40000, 42000, 47000, 43000, 48000, 45000],
      backgroundColor: '#8B5CF6',
      pattern: {
        type: 'line',
        spacing: 6,
      },
    },
  ],
}
</script>