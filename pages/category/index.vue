<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <CustomSectionHeader title="Category">
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
      <ButtonWithPopover>
        <template #trigger>
          <Button variant="outline" size="sm">More Actions</Button>
        </template>
        <template #content>
          <div class="p-2">
            <p>Helo World</p>
          </div>
        </template>
      </ButtonWithPopover>
      <Button size="sm" @click="createCategory">Create Category</Button>
    </CustomSectionHeader>
    <div class="flex flex-col items-start w-full mt-10 border rounded-md p-4">
      <SectionForm title="Category List">
        <TableCategory />
        <TiptapEditor v-model="value" />
      </SectionForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableCategory from "~/components/category-screens/TableCategory.vue";
import TiptapEditor from "~/components/TiptapEditor.vue";

const router = useRouter();

const value = ref("");

function createCategory() {
  router.push("/category/create");
  // alert(value.value);
}
</script>

<style></style>
