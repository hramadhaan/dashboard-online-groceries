<template>
  <FormField v-slot="{ componentField }" :name="props.name" class="w-full">
    <FormItem>
      <FormLabel>{{ props.title }}</FormLabel>
      <FormControl>
        <Textarea
          type="text"
          :placeholder="props.placeholder"
          class="w-full"
          v-bind="componentField"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  placeholder: string;
  name: string;
}>();
</script>

<style></style>
