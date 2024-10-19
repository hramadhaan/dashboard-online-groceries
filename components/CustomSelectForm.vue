<template>
  <FormField v-slot="{ componentField }" :name="props.name" class="w-full">
    <FormItem>
      <FormLabel>{{ props.title }}</FormLabel>

      <Select v-bind="componentField">
        <FormControl>
          <SelectTrigger>
            <SelectValue :placeholder="props.placeholder" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{{ props.placeholder }}</SelectLabel>
            <SelectItem
              v-for="item in props.value"
              :key="item.value"
              :value="item.value"
              >{{ item.name }}</SelectItem
            >
            <SelectItem v-show="props.isOptionNone" value="no"
              >Tidak Ada Pilihan</SelectItem
            >
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<script lang="ts" setup>
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectLabel from "./ui/select/SelectLabel.vue";

const props = defineProps<{
  placeholder: string;
  title: string;
  name: string;
  value: SelectForm[];
  isOptionNone?: boolean;
}>();
</script>

<style></style>
