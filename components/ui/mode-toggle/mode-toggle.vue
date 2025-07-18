<template>
  <Button variant="outline" size="icon" @click="toggleTheme">
    <component :is="isDark ? 'LucideSun' : 'LucideMoon'" class="h-5 w-5" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
