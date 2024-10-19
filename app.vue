<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage></NuxtPage>
    <Toaster />
    <VueQueryDevtools />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Dashboard Online Groceries",
  ogTitle: "Dashboard Online Groceries",
  description: "Dashboard website for Online Groceries",
  ogDescription: "Dashboard website for Online Groceries",
});
</script>
