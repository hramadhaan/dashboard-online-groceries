<template>
  <FormField v-slot="{ value }" :name="props.name" class="w-full">
    <FormItem>
      <FormLabel>{{ props.title }}</FormLabel>
      <FormControl>
        <TagsInput :model-value="value">
          <TagsInputItem v-for="item in value" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete />
          </TagsInputItem>

          <TagsInputInput :placeholder="props.placeholder" />
        </TagsInput>
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
}>();
</script>

<style></style>
