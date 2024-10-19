<template>
  <div class="flex flex-col items-start w-full">
    <p class="uppercase text-xs text-zinc-500 font-medium mb-4">
      {{ props.title }}
    </p>
    <div class="w-full space-y-3">
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
