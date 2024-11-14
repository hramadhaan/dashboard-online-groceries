<template>
  <div class="w-1/2 border p-4 bg-white flex flex-col rounded-md">
    <p class="font-bold">Carts</p>
    <Separator class="my-2" />
    <div class="w-full h-full overflow-y-scroll flex flex-col gap-y-2">
      <Skeleton v-show="!showComponent" class="w-full h-10" />
      <div
        class="flex flex-row w-full items-center"
        v-for="(item, index) in data?.items"
        :key="index"
        v-show="showComponent"
      >
        <NuxtImg
          :src="item.product.image[0]"
          :alt="item.product.name"
          class="size-12 rounded-md"
        />
        <div class="flex flex-col items-start ml-4 space-y-1">
          <p class="font-bold text-xs line-clamp-1">{{ item.product.name }}</p>
          <p class="text-xs font-bold line-clamp-1">
            {{ numberToRupiah(item.product.price) }}
          </p>
        </div>
        <div class="flex flex-row">
          <p class="text-xs font-bold ml-4">x{{ item.quantity }}</p>
        </div>
      </div>
    </div>
    <Separator class="my-2" />
    <Skeleton v-show="!showComponent" class="w-full h-10" />
    <div
      v-show="showComponent"
      class="flex flex-row items-center justify-between"
    >
      <p class="text-sm font-bold">
        {{ numberToRupiah(data?.totalPrice ?? 0) }}
      </p>
      <p class="text-xs font-semibold">x{{ data?.totalProducts ?? 0 }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Skeleton from "./ui/skeleton/Skeleton.vue";

const { data, isLoading, error } = getUserCart();

const showComponent = computed(() => {
  return data.value?.items.length > 0 && !isLoading.value;
});
</script>

<style></style>
