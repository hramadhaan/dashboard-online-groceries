<template>
  <Table>
    <TableCaption>A list of your recent categories.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">Image</TableHead>
        <TableHead class="w-[100px]">Level</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Parent</TableHead>
        <TableHead class="w-[100px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="item in data" :key="item._id">
        <TableCell>
          <CustomAvatar :name="item.name" :image-url="item.image" />
        </TableCell>
        <TableCell class="font-medium">{{ item.level }}</TableCell>
        <TableCell class="font-medium">{{ item.name }}</TableCell>
        <TableCell>{{ item.parent ?? "-" }}</TableCell>
        <TableCell>
          <div class="flex flex-row gap-x-2">
            <Button
              size="sm"
              variant="destructive"
              @click="handleDelete(item._id)"
              >Remove</Button
            >
            <Button size="sm">Edit</Button>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script lang="ts" setup>

const { data } = getCategoryData();
const { mutate, reset, error } = deleteCategory();


const handleDelete = async (id: string) => {
  mutate(id);
};
</script>

<style></style>
