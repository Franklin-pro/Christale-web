<template>
  <main class="flex-1 p-6">
    <!-- Header -->
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Course Activity</h2>
      <div class="flex items-center space-x-4">
        <button class="bg-blue-600 text-white px-4 py-2 rounded">+</button>
        <div class="flex items-center">
          <span class="mr-2">Wesley Matthews</span>
          <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>

    <!-- Courses Section -->
    <div class="grid grid-cols-3 items-center gap-3">
      <div v-for="(item, index) in accounts" :key="item.id" :style="{ transitionDelay: `${index * 100}ms` }">
        <div class="px-4 py-2 rounded-lg" :class="[colorClassesOverlay[index % colorClassesOverlay.length]]">
          <div>
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base flex items-center gap-2 font-bold"
                    :class="[colorClassesText[index % colorClassesText.length]]">
                  {{ item.name }}
                </h2>
              </div>
              <div class="flex items-end flex-col">
                <span class="bg-blue-400 w-10 h-10 flex justify-center items-center text-2xl font-semibold rounded-md px-3"
                      :class="colorClassesType(item.type)">
                  {{ item.type }}
                </span>
                <span>Completed</span>
              </div>
            </div>
            <div class="pb-2">
              <p class="text-sm">{{ item.swift }}</p>
              <p class="text-sm">{{ item.account }} - {{ item.currency }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <UProgress :value="item.progress" indicator />
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm">Continue</p>
              <UIcon name="i-heroicons-arrow-right" class="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- My Learning & Planning -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div class="p-4 border  h-[300px] shadow-lg rounded-lg">
        <h3 class="font-semibold mb-4">My Learning</h3>
        <ul>
          <div v-for="(item, index) in myLearningProgress" :key="index">
            <div class="flex items-center justify-between py-5">
              <li class="mb-2">{{ item.name }}</li>
              <div class="w-10 h-10 flex items-center justify-center border-4 rounded-full"
                   :class="progressColor(item.progress)">
                <span class="text-sm">{{ item.progress }}%</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div class="">
  <StudentChart/>
     
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

// Page meta
definePageMeta({
  layout: 'students',
});

// Function to determine the progress spinner color dynamically
const progressColor = (progress: number) => {
  if (progress < 30) return "border-red-500 text-red-500";
  if (progress < 50) return "border-yellow-500 text-yellow-500";
  if(progress < 70) return "border-orange-500 text-orange-500";
  if(progress < 100) return "border-blue-500 text-blue-500";

  return "border-green-500 text-green-500";
};

// Sample accounts data
const accounts = ref([
  {
    id: 1,
    name: "Economics",
    type: "12",
    account: "1234567890",
    swift: "ABCDEF",
    progress: 30,
    branch: "Main Branch",
    currency: "RWF",
  },
  {
    id: 2,
    name: "Business Management",
    type: "20",
    account: "9876543210",
    swift: "GHIJKL",
    progress: 40,
    branch: "Secondary Branch",
    currency: "USD",
  },
  {
    id: 3,
    name: "Information Technology (IT)",
    type: "24",
    account: "2468135790",
    swift: "MNOPQR",
    progress: 50,
    branch: "Tertiary Branch",
    currency: "EUR",
  },
]);

// Sample learning progress data
const myLearningProgress = ref([
  {
    id: 1,
    name: "Target Audience Training",
    progress: 80,
  },
  {
    id: 2,
    name: "Business Fundamentals",
    progress: 40,
  },
  {
    id: 3,
    name: "Digital Marketing Basics",
    progress: 60,
  },
]);

// Color classes for course cards
const colorClassesOverlay = [
  "bg-green-500/5",
  "bg-blue-900/5",
  "bg-blue-600/5",
  "bg-green-600/5",
  "bg-green-600/5",
];

const colorClassesText = [
  "text-green-500",
  "text-blue-900",
  "text-blue-400",
  "text-[#7CB342]",
  "text-[#7CB342]",
];

const colorClassesType = (type: string) => {
  if (type === "bank") {
    return "bg-blue-400 text-white";
  } else if (type === "MoMo") {
    return "bg-orange-400 text-white";
  } else {
    return "bg-white text-black";
  }
};

</script>
