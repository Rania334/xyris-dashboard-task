<template>
  <div class="flex flex-col items-center justify-center ">
  <h2 class="text-lg font-semibold mb-4 text-muted-foreground">User Activity</h2>

  <!-- Skeleton -->
  <div v-if="loading" class="relative w-60 h-60">
    <svg viewBox="0 0 36 36" class="w-full h-full animate-spin-slow">
      <circle
        cx="18"
        cy="18"
        r="15"
        fill="none"
        stroke-width="3"
        class="stroke-gray-300 dark:stroke-gray-700"
        stroke-dasharray="40 60"
      />
    </svg>
    <div class="absolute inset-0 flex flex-col items-center justify-center space-y-1">
      <div class="w-20 h-4 rounded bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
      <div class="w-28 h-3 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    </div>
  </div>

  <svg v-else class="w-60 h-60" viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="13" fill="none" class="stroke-gray-300 dark:stroke-gray-700" stroke-width="3" />
    <g v-for="(segment, index) in donutSegments" :key="index">
      <circle
        cx="18"
        cy="18"
        r="13"
        fill="none"
        :stroke="segment.color"
        stroke-width="3"
        stroke-linecap="round"
        :stroke-dasharray="segment.dash"
        :stroke-dashoffset="segment.offset"
        class="transition-all origin-center -rotate-90"
        :class="{ 'scale-105 brightness-110': donutHover === index }"
        @mouseenter="donutHover = index"
        @mouseleave="donutHover = null"
      />
    </g>
  </svg>

  <div v-if="!loading" class="mt-4 space-y-1 text-sm">
    <div v-for="(segment, index) in donutSegments" :key="index" class="flex items-center justify-center gap-2">
      <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: segment.color }"></div>
      <span
        :class="[
          'transition',
          { 'font-semibold': donutHover === index },
          'text-black dark:text-white'
        ]"
      >
        {{ segment.label }} - {{ segment.value }}%
      </span>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const donutHover = ref(null)
const donutSegments = ref([])

const radius = 13
const circumference = 2 * Math.PI * radius

function processDonut(rawDonut) {
  let cumulative = 0
  return rawDonut.map((s) => {
    const arcLength = (s.value / 100) * circumference
    const dash = `${arcLength} ${circumference - arcLength}`
    const offset = -cumulative
    cumulative += arcLength
    return { ...s, dash, offset }
  })
}

onMounted(async () => {
 const API_URL = useRuntimeConfig().public.API_URL
const API_KEY = useRuntimeConfig().public.API_KEY

  try {
    const res = await fetch(API_URL, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    })
    const json = await res.json()
    const data = json.record

    donutSegments.value = processDonut(data.donutChart)
  } catch (err) {
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
  }
})
</script>