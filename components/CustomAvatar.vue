<template>
  <Avatar>
    <AvatarImage :src="props.imageUrl" :alt="props.name" />
    <AvatarFallback>{{ avatarFallback }}</AvatarFallback>
  </Avatar>
</template>

<script lang="ts" setup>
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";

const props = defineProps<{
  name: string;
  imageUrl: string;
}>();

const avatarFallback = computed(() => {
  return props.name.charAt(0).toUpperCase();
});
</script>

<style></style>
