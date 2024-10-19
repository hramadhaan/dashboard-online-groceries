<template>
  <div class="flex flex-row items-center justify-between w-full">
    <p class="text-xl font-semibold">{{ props.title }}</p>
    <div class="flex flex-row items-center gap-x-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style></style>
