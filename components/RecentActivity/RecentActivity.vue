<template>
  <div class="bg-white dark:bg-muted rounded-xl shadow p-4">
    <h3 class="text-lg font-semibold mb-4 text-muted-foreground">Recent Activity</h3>

    <!-- Skeletons -->
    <ul v-if="loading" class="space-y-4">
      <li v-for="i in 5" :key="i" class="flex items-start justify-between gap-4 animate-pulse">
        <div class="flex items-center gap-3 w-full">
          <div class="w-5 h-5 rounded-full bg-muted shrink-0" />
          <div class="flex-1 space-y-1">
            <div class="h-3 w-1/2 bg-muted rounded" />
            <div class="h-2 w-1/3 bg-muted rounded" />
          </div>
        </div>
        <div class="h-2 w-16 bg-muted rounded" />
      </li>
    </ul>
    <ul v-else class="space-y-4">
      <li
        v-for="activity in slicedActivities"
        :key="activity.id"
        class="flex items-start justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <component
            :is="iconMap[activity.icon] || 'span'"
            class="text-primary w-5 h-5 shrink-0"
          />
          <div>
            <p class="text-sm text-foreground leading-snug">
              <span class="font-medium">{{ activity.user }}</span> {{ activity.action }}
            </p>
            <p class="text-xs text-muted-foreground">{{ activity.meta }}</p>
          </div>
        </div>
        <span class="text-xs text-muted-foreground whitespace-nowrap">
          {{ formatTimeAgo(activity.timestamp) }}
        </span>
      </li>
    </ul>
    <div v-if="!loading && activities.length > visibleCount" class="text-center mt-4">
      <button
        class="px-4 py-2 text-sm font-medium text-primary border border-border rounded hover:bg-muted"
        @click="visibleCount += 5"
      >
        Load More
      </button>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue'
import {
  UserPlus,
  CreditCard,
  Bug,
  ShieldAlert,
  Settings,
  FileText,
} from 'lucide-vue-next'

const iconMap = {
  UserPlus,
  CreditCard,
  Bug,
  ShieldAlert,
  Settings,
  FileText,
}

const activities = ref([])
const visibleCount = ref(5)
const API_URL3 = useRuntimeConfig().public.API_URL3
const API_KEY = useRuntimeConfig().public.API_KEY

const loading = ref(true)

const fetchActivities = async () => {
  try {
    const res = await fetch(API_URL3, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    })
    const json = await res.json()
    activities.value = json.record
  } catch (error) {
    console.error('Failed to load activities:', error)
  } finally {
    loading.value = false
  }
}

const formatTimeAgo = (isoString) => {
  const now = new Date()
  const past = new Date(isoString)
  const seconds = Math.floor((now - past) / 1000)

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ]

  for (const i of intervals) {
    const count = Math.floor(seconds / i.seconds)
    if (count >= 1) return `${count} ${i.label}${count > 1 ? 's' : ''} ago`
  }

  return 'just now'
}

const slicedActivities = computed(() => activities.value.slice(0, visibleCount.value))

onMounted(fetchActivities)

</script>
