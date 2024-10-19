<template>
  <Popover>
    <PopoverTrigger as-child>
      <slot name="trigger"></slot>
    </PopoverTrigger>
    <PopoverContent>
      <slot name="content"></slot>
    </PopoverContent>
  </Popover>
</template>

<script lang="ts" setup></script>

<style></style>
