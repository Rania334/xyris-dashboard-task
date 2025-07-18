<template>
  <Dialog :open="open" @update:open="open = $event">
    <DialogContent class="sm:max-w-md rounded-xl shadow-lg p-6">
      <DialogHeader>
        <DialogTitle class="text-lg">User Settings</DialogTitle>
        <DialogDescription class="text-sm text-muted-foreground">
          Update your profile information here.
        </DialogDescription>
      </DialogHeader>
      <form @submit.prevent="saveSettings" class="space-y-4 mt-4">
        <div>
          <Label for="username">Username</Label>
          <Input
            id="username"
            v-model="username"
            required
            :class="{ 'border-red-500': errors.username }"
          />
          <p v-if="errors.username" class="text-xs text-red-500 mt-1">
            {{ errors.username }}
          </p>
        </div>
        <div>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            v-model="email"
            required
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-xs text-red-500 mt-1">
            {{ errors.email }}
          </p>
        </div>

        <div class="flex items-center gap-2 pt-2">
          <Switch id="notifications" v-model:checked="notifications" />
          <Label for="notifications">Enable Notifications</Label>
        </div>

        <div class="flex justify-end gap-2 pt-6">
          <Button type="button" variant="outline" @click="closeDialog">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const username = ref('Rania')
const email = ref('Rania@example.com')
const notifications = ref(true)

const errors = ref<{ username?: string; email?: string }>({})

function validate() {
  errors.value = {}

  if (username.value.trim().length < 4) {
    errors.value.username = 'Username must be at least 4 characters.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    errors.value.email = 'Please enter a valid email address.'
  }

  return Object.keys(errors.value).length === 0
}

function saveSettings() {
  if (!validate()) return

  console.log('Saving:', {
    username: username.value,
    email: email.value,
    notifications: notifications.value,
  })

  open.value = false
}

function closeDialog() {
  open.value = false
}
</script>
