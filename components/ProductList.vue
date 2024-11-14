<template>
  <div class="flex flex-col items-start w-full border rounded-md p-4">
    <div class="flex flex-row items-center justify-between w-full">
      <p class="font-bold">List of Products</p>
      <Input placeholder="Search Products" class="w-1/3" />
    </div>
    <Separator class="my-2" />
    <div class="flex flex-row items-center w-full space-x-2">
      <div
        class="p-2 flex flex-row items-center space-x-2 border rounded-md"
        v-show="dataCategory"
        v-for="(item, index) in dataCategory"
        :key="index"
      >
        <NuxtImg :src="item.image" class="size-5" :alt="item.name" />
        <p class="text-xs font-medium">{{ item.name }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 w-full mt-4">
      <div
        class="p-2 rounded-md flex border flex-col"
        v-for="(item, index) in dataProduct"
        :key="index"
      >
        <NuxtImg :src="item.image[0]" class="w-full" />
        <p class="text-sm font-medium mt-2 line-clamp-2">{{ item.name }}</p>
        <p class="text-sm font-bold mt-2">
          {{ numberToRupiah(item.price) }}
        </p>
        <Button
          @click="addToCart(item._id, 1)"
          class="mt-2"
          variant="default"
          size="sm"
        >
          <ShoppingCartIcon class="size-4 mr-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCartIcon } from "lucide-vue-next";

const { data: dataCategory } = getCategoryData();
const { data: dataProduct } = getAllProducts();
const { mutate } = addToCartMutation();

const addToCart = (id: string, quantity: number = 1) => {
  mutate({ product: id, quantity });
};
</script>

<style></style>
