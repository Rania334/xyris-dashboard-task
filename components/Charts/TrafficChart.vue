<template>
   <div class="relative bg-white dark:bg-muted p-4 h-full  w-full">
  <h2 class="text-lg font-semibold mb-4 text-muted-foreground text-center">Website Traffic</h2>

  <!-- Skeleton -->
  <div v-if="loading" class="w-full h-full relative overflow-hidden rounded">
    <div class="absolute inset-0 bg-gradient-to-r from-gray-300/30 via-gray-100/40 to-gray-300/30 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 right-0 flex justify-between px-2 h-full">
      <div v-for="i in 12" :key="i" class="w-[6%] h-full flex items-end">
        <div class="w-full bg-gray-400/30 dark:bg-gray-600/30 rounded-t animate-pulse" :style="{ height: `${Math.random() * 70 + 30}%` }"></div>
      </div>
    </div>
  </div>

  <svg
    v-else
    ref="svgRef"
    :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
    preserveAspectRatio="none"
    class="w-full aspect-[2/1]"
    @mousemove="handleMouse"
    @mouseleave="hoverIndex = null"
    @touchmove.prevent="handleTouch"
    @touchstart.prevent="handleTouch"
    @touchend="hoverIndex = null"
  >
    <path :d="generateAreaPath(trafficData)" fill="url(#gradient)" opacity="0.2" />
    <path
      :d="generateSmoothLine(trafficData)"
      stroke="currentColor"
      class="text-gray-800 dark:text-gray-100"
      fill="none"
      stroke-width="3"
      :style="{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }"
    />
    <path
      :d="generateSmoothLine(trafficComparison)"
      stroke="#9ca3af"
      fill="none"
      stroke-dasharray="4"
      stroke-width="2"
    />
    <circle
      v-if="hoverIndex !== null"
      :cx="getX(hoverIndex)"
      :cy="getY(trafficData[hoverIndex])"
      r="5"
      class="fill-gray-800 dark:fill-gray-100"
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" class="stop-gray-800 dark:stop-gray-100" stop-opacity="0.4" />
        <stop offset="100%" class="stop-white dark:stop-muted" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>

  <div
    v-if="!loading && hoverIndex !== null"
    class="absolute -top-2 text-sm font-medium bg-white dark:bg-muted border dark:border-gray-700 rounded px-2 py-1 shadow pointer-events-none text-black dark:text-white"
    :style="{ left: tooltipX + 'px', transform: 'translateX(-50%)' }"
  >
    {{ months[hoverIndex] }}: {{ trafficData[hoverIndex] }}
  </div>

  <div v-if="!loading" class="mt-4 flex justify-between text-sm text-muted-foreground hidden sm:flex">
    <span v-for="(month, index) in months" :key="index">{{ month }}</span>
  </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const trafficData = ref([])
const trafficComparison = ref([])
const months = ref([])

const svgWidth = 800
const svgHeight = 300
const hoverIndex = ref(null)
const tooltipX = ref(0)
const dashArray = ref('0')
const dashOffset = ref('0')

function getX(i) {
  return (svgWidth / (trafficData.value.length - 1)) * i
}
function getY(val) {
  return svgHeight - val
}

function generateSmoothLine(data) {
  const step = svgWidth / (data.length - 1)
  let d = `M 0 ${getY(data[0])}`
  for (let i = 1; i < data.length; i++) {
    const x = i * step
    const prevX = (i - 1) * step
    const y = getY(data[i])
    const prevY = getY(data[i - 1])
    const cp1x = prevX + step / 2
    const cp1y = prevY
    const cp2x = x - step / 2
    const cp2y = y
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`
  }
  return d
}

function generateAreaPath(data) {
  const line = generateSmoothLine(data)
  return `${line} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`
}

function handleMouse(e) {
  const bounds = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - bounds.left
  const index = Math.round(x / (bounds.width / (trafficData.value.length - 1)))
  hoverIndex.value = Math.max(0, Math.min(index, trafficData.value.length - 1))
  tooltipX.value = x
}

function handleTouch(e) {
  const touch = e.touches[0]
  const bounds = e.currentTarget.getBoundingClientRect()
  const x = touch.clientX - bounds.left
  const index = Math.round(x / (bounds.width / (trafficData.value.length - 1)))
  hoverIndex.value = Math.max(0, Math.min(index, trafficData.value.length - 1))
  tooltipX.value = x
}

onMounted(async () => {
 const API_URL = useRuntimeConfig().public.API_URL
const API_KEY = useRuntimeConfig().public.API_KEY
  try {
    const res = await fetch(API_URL, {
      headers: { 'X-Master-Key': API_KEY }
    })
    const json = await res.json()
    const data = json.record

    trafficData.value = data.trafficData
    trafficComparison.value = data.trafficComparison
    months.value = data.months

    setTimeout(() => {
      const path = document.querySelector('path[stroke="currentColor"]')
      if (path) {
        const length = path.getTotalLength()
        dashArray.value = length
        dashOffset.value = length
        setTimeout(() => {
          dashOffset.value = '0'
        }, 100)
      }
    }, 100)
  } catch (err) {
    console.error('Fetch error:', err)
  } finally {
    loading.value = false
  }
})
</script>
