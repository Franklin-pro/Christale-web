<template>
  <div class="bg-white relative px-6 py-4 w-[50%] h-[500px] rounded-lg shadow">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl text-gray-800 font-semibold">Analytics</h2>
    </div>
    <div class=" h-[400px] flex justify-center">
      <Doughnut :data="chartData" :options="options" />
      <div class="absolute bottom-1  w-full flex justify-center gap-4 text-sm text-gray-600">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
          <span>Sales (55.5%)</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-[#10B981]"></div>
          <span>Distribute (33.5%)</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-[#1C1C28]"></div>
          <span>Returns (11%)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: ['Sales', 'Distribute', 'Returns'],
  datasets: [{
    data: [55.5, 33.5, 11],
    backgroundColor: ['#8B5CF6', '#10B981', '#1C1C28'],
    borderWidth: 0
  }]
}

const options = {
  cutout: '70%',
  plugins: {
    legend: {
      display: false
    }
  }
}
</script>