<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <CustomSectionHeader title="Discount">
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
      <Button variant="default" size="sm" @click="navigateCreateDiscount"
        >Create Discount</Button
      >
    </CustomSectionHeader>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const navigateCreateDiscount = () => {
  router.push("/discount/create");
};
</script>

<style></style>
