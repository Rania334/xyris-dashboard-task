<template>
  <Header />
  <div class="min-h-screen flex pt-16  "> 
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between p-4 ">
        <MobileSidebar />
      </div>
      <div class="p-4 space-y-6">
        <StatsCard />
        <ChartPlaceholder />
        <RecentActivity />
      </div>
      <div class="p-4">
        <slot />
        <SettingsModal />
      </div>
    </div>
  </div>
</template>
