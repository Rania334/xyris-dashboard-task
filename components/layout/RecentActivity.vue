<template>
  <div class="bg-white dark:bg-muted rounded-xl shadow p-4">
    <h3 class="text-lg font-semibold mb-4 text-muted-foreground">Recent Activity</h3>
    <ul class="space-y-4">
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="flex items-start justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <component :is="activity.icon" class="text-primary w-5 h-5 shrink-0" />
          <div>
            <p class="text-sm text-foreground leading-snug">
              <span class="font-medium">{{ activity.user }}</span> {{ activity.action }}
            </p>
            <p class="text-xs text-muted-foreground">{{ activity.meta }}</p>
          </div>
        </div>
        <span class="text-xs text-muted-foreground whitespace-nowrap">
          {{ activity.timestamp }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  UserPlus,
  CreditCard,
  Bug,
  ShieldAlert,
  Settings,
  FileText,
} from 'lucide-vue-next'

const activities = [
  {
    id: 1,
    user: 'Alice Stone',
    action: 'created an account',
    timestamp: '5 mins ago',
    icon: UserPlus,
    meta: 'Email: alice@domain.com',
  },
  {
    id: 2,
    user: 'Billing System',
    action: 'processed a payment',
    timestamp: '30 mins ago',
    icon: CreditCard,
    meta: 'Subscription: Pro Plan • $49.00',
  },
  {
    id: 3,
    user: 'Liam Patel',
    action: 'reported a bug',
    timestamp: '1 hour ago',
    icon: Bug,
    meta: 'Issue: Login button unresponsive',
  },
  {
    id: 4,
    user: 'Admin',
    action: 'updated terms of service',
    timestamp: 'Today',
    icon: FileText,
    meta: 'Version 3.2 deployed',
  },
  {
    id: 5,
    user: 'Security System',
    action: 'detected suspicious login',
    timestamp: 'Yesterday',
    icon: ShieldAlert,
    meta: 'IP: 192.168.1.22 • Location: France',
  },
  {
    id: 6,
    user: 'Emily Zhao',
    action: 'changed profile settings',
    timestamp: '2 days ago',
    icon: Settings,
    meta: 'Updated profile photo & bio',
  },
]
</script>
