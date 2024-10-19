<template>
  <div class="w-full cursor-pointer" role="button" @click="toggle">
    <div
      class="flex flex-row items-center p-2 hover:bg-white rounded-md justify-between w-full"
    >
      <div class="flex flex-row items-center gap-x-2">
        <slot name="icon"></slot>
        <span class="text-sm font-normal">{{ name }}</span>
      </div>
      <ChevronDownIcon v-if="isCollapsible && !isOpen" class="size-4" />
      <ChevronUpIcon v-if="isCollapsible && isOpen" class="size-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ChevronDownIcon, ChevronUpIcon } from "lucide-vue-next";

const props = defineProps(["name", "isCollapsible", "to"]);
const router = useRouter();

const isOpen = ref(false);

function toggle() {
  if (props.isCollapsible) {
    isOpen.value = !isOpen.value;
  } else {
    router.push(props.to);
  }
}
</script>

<style></style>
