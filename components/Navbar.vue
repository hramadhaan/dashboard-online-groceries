<template>
  <header class="flex flex-row items-center justify-between w-full">
    <h1 class="text-lg font-medium">Welcome, Hanif Ramadhan</h1>
    <div class="flex flex-row items-center gap-x-2">
      <Button variant="outline" size="icon">
        <MailIcon class="size-5" />
      </Button>

      <Button variant="outline" size="icon">
        <BellIcon class="size-5" />
      </Button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { MailIcon, BellIcon } from "lucide-vue-next";
</script>

<style></style>
