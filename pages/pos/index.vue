<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <CustomSectionHeader title="Orders">
      <ButtonWithPopover>
        <template #trigger>
          <Button variant="outline" size="icon">
            <InfoIcon color="#1a1a1a" class="size-4" />
          </Button>
        </template>
        <template #content>
          <div class="space-y-2">
            <p class="text-sm">
              <strong>Minimum Stock</strong>: Akan memberikan peringatan jika
              stok dalam produk tersebut akan habis.
            </p>
            <p class="text-sm">
              <strong>Current Stock</strong>: Jumlah stok yang tersedia pada
              produk tersebut.
            </p>
          </div>
        </template>
      </ButtonWithPopover>
    </CustomSectionHeader>
    <div class="flex flex-row w-full mt-10 space-x-2">
      <ProductList />
      <!-- Recent Orders -->
      <CartSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { InfoIcon } from "lucide-vue-next";
import ButtonWithPopover from "~/components/ButtonWithPopover.vue";
</script>

<style></style>
