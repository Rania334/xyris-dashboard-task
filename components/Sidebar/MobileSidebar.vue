<template>
  <Sheet v-model:open="open">
    <SheetContent
      side="left"
      class="w-64 p-0"
      :class="{ 'overflow-hidden': open }"
    >
      <div class="h-full flex flex-col overflow-y-auto px-6 py-4">
        <SheetHeader>
          <SheetTitle class="text-lg font-bold text-primary">My Dashboard</SheetTitle>
        </SheetHeader>

        <div class="mt-4">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-3 py-2 text-sm bg-muted rounded-md focus:outline-none focus:ring focus:ring-ring"
          />
        </div>
        <div class="flex flex-col gap-6 mt-6 flex-grow">
          <div>
            <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main</h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="item in mainNav"
                :key="item.label"
                :to="item.to"
                class="sidebar-link"
                @click="closeSheet"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Insights</h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="item in insightsNav"
                :key="item.label"
                :to="item.to"
                class="sidebar-link"
                @click="closeSheet"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <div>
            <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Settings</h3>
            <div class="space-y-1">
              <NuxtLink
                v-for="item in settingsNav"
                :key="item.label"
                :to="item.to"
                class="sidebar-link"
                @click="closeSheet"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="mt-4 border-t pt-4">
          <NuxtLink to="/profile" class="sidebar-link" @click="closeSheet">Profile</NuxtLink>
          <NuxtLink to="/logout" class="sidebar-link text-destructive" @click="closeSheet">Logout</NuxtLink>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup>
import { ref, watch } from 'vue'

const open = ref(false)

watch(open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const closeSheet = () => {
  open.value = false
}

defineExpose({ open })

const mainNav = [
  { label: 'Dashboard', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Teams', to: '/teams' },
  { label: 'Tasks', to: '/tasks' },
]

const insightsNav = [
  { label: 'Reports', to: '/reports' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Traffic', to: '/traffic' },
]

const settingsNav = [
  { label: 'General', to: '/settings' },
  { label: 'Billing', to: '/settings/billing' },
  { label: 'Security', to: '/settings/security' },
]
</script>

<style scoped>
.sidebar-link {
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tw-prose-muted-foreground, #6b7280);
  transition-property: background-color;
  transition-duration: 150ms;
}
.sidebar-link:hover {
  background-color: var(--tw-prose-muted, #f3f4f6);
}
</style>