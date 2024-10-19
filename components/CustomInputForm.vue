<template>
  <FormField v-slot="{ componentField }" :name="props.name" class="w-full">
    <FormItem>
      <FormLabel>{{ props.title }}</FormLabel>
      <FormControl>
        <Input
          :type="props.type"
          :accept="props.type === 'file' ? props.accept : ''"
          :placeholder="props.placeholder"
          class="w-full"
          v-bind="componentField"
          :multiple="isMultiple"
          @change="props.handleChange"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  title: string;
  placeholder?: string;
  type: string;
  handleChange?: (value: string) => void;
  multipleImage?: boolean;
  accept?: string;
}>();

const isMultiple = computed(() => {
  return props.type === "file" && props.multipleImage ? "multiple" : "";
});
</script>

<style></style>
