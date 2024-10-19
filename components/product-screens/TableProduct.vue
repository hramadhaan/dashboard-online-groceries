<template>
  <Table>
    <TableCaption>A list of your recent products.</TableCaption>
    <TableHeader>
      <TableHead>SKU</TableHead>
      <TableHead>Image</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead>Brand</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Status</TableHead>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in data" :key="index">
        <TableCell class="font-medium">{{ item.sku }}</TableCell>
        <TableCell>
          <CustomAvatar :name="item.name" :image-url="item?.image?.[0]" />
        </TableCell>
        <TableCell>{{ item.name }}</TableCell>
        <TableCell>{{ item.category.name }}</TableCell>
        <TableCell>{{ item.brand ?? "no-brands" }}</TableCell>
        <TableCell>Rp.{{ item.price }}</TableCell>
        <TableCell
          :class="item.status === 'active' ? 'text-green-500' : 'text-red-500'"
          class="capitalize font-semibold"
          >{{ item.status }}</TableCell
        >
      </TableRow>
    </TableBody>
  </Table>
</template>

<script lang="ts" setup>
const { data, isLoading, error } = getAllProducts();
</script>

<style></style>
