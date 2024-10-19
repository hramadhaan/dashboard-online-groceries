<template>
  <Collapsible v-model:open="isOpen" class="w-full">
    <CollapsibleTrigger as-child class="w-full flex flex-row items-center">
      <slot name="title"></slot>
    </CollapsibleTrigger>
    <CollapsibleContent class="w-full">
      <div class="pl-4 flex flex-col items-start">
        <slot name="content"></slot>
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>

<script lang="ts" setup>
import Collapsible from "./ui/collapsible/Collapsible.vue";
import CollapsibleContent from "./ui/collapsible/CollapsibleContent.vue";
import CollapsibleTrigger from "./ui/collapsible/CollapsibleTrigger.vue";

const isOpen = ref(false);
</script>

<style></style>
