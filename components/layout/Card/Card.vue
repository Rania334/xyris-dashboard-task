<template>
  <div
    class="bg-white dark:bg-muted border rounded-xl p-4 shadow-sm transition-transform hover:scale-[1.08] duration-300 ease-in-out"
  >
    <div class="flex items-center justify-between mb-1">
      <h2 class="text-sm text-muted-foreground font-medium">{{ label }}</h2>
      <component :is="icon" class="w-5 h-5 text-muted-foreground" />
    </div>
    <p class="text-2xl font-semibold text-foreground">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  icon: [Object, Function],
})
</script>
