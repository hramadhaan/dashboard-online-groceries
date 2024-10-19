<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <CustomSectionHeader title="Customer">
      <ButtonWithPopover>
        <template #trigger>
          <Button variant="outline" size="sm">Export</Button>
        </template>
        <template #content>
          <div class="p-2">
            <p>Helo World</p>
          </div>
        </template>
      </ButtonWithPopover>
      <Button variant="default" size="sm">Create Customer</Button>
    </CustomSectionHeader>
    <div class="flex flex-col items-start w-full mt-10 border rounded-md p-4">
      <SectionForm title="Customer List">
        <TableCategory />
      </SectionForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableCategory from '~/components/category-screens/TableCategory.vue';
</script>

<style></style>
