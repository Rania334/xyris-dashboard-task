<template>
  <header class="w-full fixed top-0 left-0 h-16 z-50 bg-background border-b">
    <div class="flex items-center justify-between px-4 py-3">
      <div class="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          class="lg:hidden"
          @click="openSidebar"
        >
          <LucideMenu class="h-5 w-5" />
        </Button>

        <img
          src="https://xyrisdigital.com/images/logo-light.svg"
          alt="Logo"
          class="h-10 w-10"
        />
        <span class="font-semibold text-lg">Xyris Dashboard</span>
      </div>

      <div class="flex items-center gap-4">
<Button
  variant="ghost"
  size="icon"
  class="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
  @click="toggleTheme"
>
  <LucideMoon class="w-5 h-5 dark:hidden text-gray-700" />
  <LucideSun class="w-5 h-5 hidden dark:block text-yellow-300" />
</Button>


        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Avatar class="cursor-pointer">
              <AvatarImage src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png" />
              <AvatarFallback>XD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            class="w-56 p-2 rounded-xl shadow-lg border bg-white dark:bg-muted text-sm space-y-1"
          >
            <div class="px-3 py-2">
              <p class="font-medium text-muted-foreground">My Account</p>
              <p class="text-xs text-gray-500 dark:text-gray-400 truncate">user@example.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              class="px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-2"
            >
              <LucideUser class="w-4 h-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              @click="openSettings"
              class="px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center gap-2"
            >
              <LucideSettings class="w-4 h-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              class="px-3 py-2 rounded-md transition-colors hover:bg-red-100 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 cursor-pointer flex items-center gap-2"
            >
              <LucideLogOut class="w-4 h-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <Dialog :open="settingsOpen" @update:open="settingsOpen = $event">
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
              v-model="form.username"
              required
            />
          </div>
          <div>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              v-model="form.email"
              required
            />
          </div>

          <div class="flex items-center gap-2 pt-2">
            <Switch id="notifications" v-model:checked="form.notifications" />
            <Label for="notifications">Enable Notifications</Label>
          </div>
          <div class="flex justify-end gap-2 pt-6">
            <Button type="button" variant="outline" @click="settingsOpen = false">Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

    <MobileSidebar ref="sidebarRef" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

import { LucideMenu, LucideUser, LucideSettings, LucideLogOut } from 'lucide-vue-next'

const sidebarRef = ref(null)
const openSidebar = () => {
  if (sidebarRef.value) sidebarRef.value.open = true
}

const settingsOpen = ref(false)
const openSettings = () => {
  settingsOpen.value = true
}

const form = ref({
  username: '',
  email: '',
  notifications: true
})

const saveSettings = () => {
  console.log('Settings saved:', form.value)
  settingsOpen.value = false
}

import { useColorMode } from '@vueuse/core'

const mode = useColorMode()

const toggleTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
