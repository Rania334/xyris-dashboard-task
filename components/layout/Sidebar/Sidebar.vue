<template>
  <aside class="hidden md:flex w-64 flex-col border-r bg-background p-6 space-y-6 shadow-sm">
   
    <div>
      <input
        type="text"
        placeholder="Search..."
        class="w-full px-3 py-2 text-sm bg-muted rounded-md focus:outline-none focus:ring focus:ring-ring"
      />
    </div>

    <div class="flex flex-col space-y-4">
      <div>
        <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main</h3>
        <div class="space-y-1">
          <NuxtLink
            v-for="item in mainNav"
            :key="item.label"
            :to="item.to"
            class="sidebar-link"
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
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mt-auto border-t pt-4">
      <NuxtLink to="/profile" class="sidebar-link">Profile</NuxtLink>
      <NuxtLink to="/logout" class="sidebar-link text-destructive">Logout</NuxtLink>
    </div>
  </aside>
</template>

<script setup>
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
  transition-property: background-color, color;
  transition-duration: 150ms;
}
.sidebar-link:hover {
  background-color: var(--tw-prose-muted, #f3f4f6);
}
</style>
