<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />

    <form
      method="post"
      class="flex flex-col items-start w-full"
      @submit="onSubmit"
    >
      <!-- Header Form -->
      <CustomSectionHeader title="Create Category">
        <Button size="sm" variant="outline" type="button">Save as Draft</Button>
        <Button size="sm" variant="default" type="submit">Publish</Button>
      </CustomSectionHeader>
      <!-- Grid Layout -->
      <div class="grid grid-cols-3 gap-4 w-full mt-10">
        <div class="col-span-2 p-4 border rounded-md drop-shadow-sm bg-white">
          <!-- Content -->
          <SectionForm title="Category Details">
            <CustomInputForm
              type="text"
              title="Category Name"
              name="name"
              placeholder="Category Name"
            />
          </SectionForm>
          <Separator class="my-6" />
          <SectionForm title="Relation of Category">
            <CustomSelectForm
              title="Kategori 1"
              name="categoryOne"
              placeholder="Pilih Kategori Pertama"
              :value="categoryOneData"
              is-option-none
            />
            <CustomSelectForm
              v-if="showCategoryTwo"
              title="Kategori 2"
              name="categoryTwo"
              placeholder="Pilih Kategori Kedua"
              :value="categoryTwoData"
              is-option-none
            />
          </SectionForm>
        </div>
        <div class="p-4 border rounded-md drop-shadow-sm bg-white">
          <SectionForm title="Product Image">
            <CustomInputForm
              accept="image/*"
              type="file"
              name="image"
              title="Image"
              :handle-change="handleUploadImage"
            />
            <img
              v-if="previewImage"
              :src="previewImage"
              class="w-full h-40 object-cover"
            />
          </SectionForm>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { isEmpty } from "@unovis/ts";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";
import { useToast } from "~/components/ui/toast";

const { data } = getCategoryData();
const { data: dataSecond } = getSecondCategoryData();
const { mutate } = mutateSecondCategoryData();

const categoryOneData = computed(() => {
  const tempData: SelectForm[] = [];
  if (data.value && data.value.length > 0) {
    data.value.forEach((item) => {
      tempData.push({ name: item.name, value: item._id });
    });
  }
  return tempData;
});

const categoryTwoData = computed(() => {
  const tempData: SelectForm[] = [];
  if (dataSecond.value && dataSecond.value.length > 0) {
    dataSecond.value.forEach((item) => {
      tempData.push({ name: item.name, value: item._id });
    });
  }
  return tempData;
});

console.log("Data Second: ", dataSecond.value);

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(2, { message: "Must be at least 2 characters" })
      .max(50, { message: "Must be 50 characters or less" }),
    categoryOne: z.optional(z.string({ message: "Please select an option" })),
    categoryTwo: z.optional(z.string({ message: "Please select an option" })),
    image: z.optional(z.any()),
  })
);

const { handleSubmit, values, resetForm } = useForm({
  validationSchema: formSchema,
});

console.log("rerender");

const showCategoryTwo = ref(false);
const imageValue = ref();
const previewImage = ref();

const { data: dataAuth } = useAuth();

interface InputFileEvent extends Event {
  target: HTMLInputElement;
}

const handleUploadImage = (event: any) => {
  const image = event.target.files[0];
  imageValue.value = image;
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    previewImage.value = e.target?.result;
  };
};

watch(values, (value) => {
  if (
    value.categoryOne &&
    !isEmpty(value.categoryOne) &&
    value.categoryOne !== "no"
  ) {
    showCategoryTwo.value = true;
    mutate(values.categoryOne as string);
  }
});

const { toast } = useToast();

const onSubmit = handleSubmit((values) => {
  console.log("Values: ", { values, imageValue: imageValue });
  let level = 1;
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("image", imageValue.value);
  if (
    !isEmpty(values.categoryOne) &&
    values.categoryOne !== "no" &&
    !isEmpty(values.categoryTwo) &&
    values.categoryTwo !== "no"
  ) {
    level = 3;
  } else if (
    !isEmpty(values.categoryOne) &&
    values.categoryOne !== "no" &&
    isEmpty(values.categoryTwo)
  ) {
    level = 2;
  }
  formData.append("level", level.toString());
  if (
    (!isEmpty(values.categoryOne) && values.categoryOne !== "no") ||
    (!isEmpty(values.categoryTwo) && values.categoryTwo !== "no")
  ) {
    formData.append(
      "parent",
      (values.categoryTwo ?? values.categoryOne) as string
    );
  }
  for (var pair of formData.entries()) {
    console.log(`${pair[0]} : `, pair[1]);
  }

  instance
    .post("/category/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${dataAuth.value?.user.token}`,
      },
    })
    .then((result) => {
      if (result.status === 201) {
        resetForm();
        toast({
          title: "Kategori berhasil ditambahkan.",
        });
      }
    })
    .catch((err) => {
      console.log("Error Add Category: ", err);
    });
});
</script>

<style></style>
