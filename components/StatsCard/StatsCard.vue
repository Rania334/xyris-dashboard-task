<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
    <template v-if="loading">
      <div
        v-for="n in 4"
        :key="n"
        class="bg-white dark:bg-muted border rounded-xl p-4 shadow-sm animate-pulse"
      >
        <div class="flex items-center justify-between mb-1">
          <div class="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div class="h-5 w-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div class="h-7 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </template>

    <template v-else>
      <Card
        v-for="stat in stats"
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :icon="stat.icon"
      />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Users, UserCheck, UserPlus, Eye } from 'lucide-vue-next'

const stats = ref([])
const loading = ref(true)

const API_URL2 = useRuntimeConfig().public.API_URL2
const API_KEY = useRuntimeConfig().public.API_KEY

onMounted(async () => {
  try {
    const res = await fetch(API_URL2, {
      headers: { 'X-Master-Key': API_KEY },
    })
    const json = await res.json()
    const data = json.record

    stats.value = [
      { label: 'Total Users', value: data.totalUsers, icon: Users },
      { label: 'Active Users', value: data.activeUsers, icon: UserCheck },
      { label: 'New Signups', value: data.newSignups, icon: UserPlus },
      { label: 'Visits', value: data.visits + 1, icon: Eye },
    ]

    await fetch(API_URL2, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      body: JSON.stringify({ ...data, visits: data.visits + 1 }),
    })
  } catch (err) {
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
})
</script>
