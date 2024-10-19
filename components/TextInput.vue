<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search"
      :type="type"
      :placeholder="placeholder"
      :class="resultClasses"
      autocomplete="off"
      v-model="model"
    />
    <span
      v-if="$slots.icon"
      class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
    >
      <slot name="icon"></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const props = defineProps(["type", "placeholder", "customClass"]);
const model = defineModel();

const resultClasses = computed(() => cn(props.customClass, 'bg-transparent'))

</script>

<style></style>
