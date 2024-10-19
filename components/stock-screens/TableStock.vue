<template>
  <Table>
    <TableCaption>A list of your recent stock of products.</TableCaption>
    <TableHeader>
      <TableHead>SKU</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Minimum Stock</TableHead>
      <TableHead>Current Stock</TableHead>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in data" :key="index">
        <TableCell class="font-medium">{{ item.sku }}</TableCell>
        <TableCell>{{ item.name }}</TableCell>
        <TableCell>{{ item.stock.minimumStock }}</TableCell>
        <TableCell>{{ item.stock.currentStock }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script lang="ts" setup>
const { data } = getAllProducts();
console.log('Data Fetch: ', data)
</script>

<style></style>
