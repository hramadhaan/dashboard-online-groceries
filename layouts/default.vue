<template>
  <div class="flex flex-row max-w-full items-start bg-white min-h-screen">
    <Sidebar />
    <div
      class="flex flex-1 flex-col items-start w-full p-2 bg-white m-2 rounded-md"
    >
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
