<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <CustomSectionHeader title="Product">
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
      <Button size="sm" @click="createProduct">Create Product</Button>
    </CustomSectionHeader>
    <div class="flex flex-col items-start w-full mt-10 border rounded-md p-4">
      <SectionForm title="Product List">
        <TableProduct />
      </SectionForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableProduct from '~/components/product-screens/TableProduct.vue';

const router = useRouter();
const createProduct = () => {
  router.push("/product/create");
};
</script>

<style></style>
