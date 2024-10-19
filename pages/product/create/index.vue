<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <form
      method="post"
      class="flex flex-col items-start w-full"
      @submit="onSubmit"
    >
      <!-- Header Form -->
      <!-- <div class="flex flex-row items-center justify-between w-full">
        <p class="text-xl font-semibold">Create Product</p>
        <div class="flex flex-row items-center gap-x-2">
          <Button size="sm" variant="outline">Save as Draft</Button>
          <Button size="sm" variant="default" type="submit">Publish</Button>
        </div>
      </div> -->
      <CustomSectionHeader title="Create Product">
        <Button size="sm" variant="outline">Save as Draft</Button>
        <Button size="sm" variant="default" type="submit">Publish</Button>
      </CustomSectionHeader>
      <!-- Grid Layout -->
      <div class="grid grid-cols-3 gap-4 w-full mt-10">
        <div class="col-span-2 p-4 border rounded-md drop-shadow-sm bg-white">
          <!-- Content -->
          <SectionForm title="Product Details">
            <CustomInputForm
              type="text"
              title="Product Name"
              name="name"
              placeholder="Product Name"
            />
            <CustomTextAreaForm
              title="Product Description"
              name="description"
              placeholder="Product Description"
            />
            <CustomInputForm
              type="text"
              title="SKU"
              name="sku"
              placeholder="SKU"
            />
            <CustomInputForm
              type="number"
              title="Berat"
              name="weight"
              placeholder="Berat (satuan Gram)"
            />
          </SectionForm>
          <Separator class="my-6" />
          <SectionForm title="Product Prices">
            <div class="grid grid-cols-2 gap-4">
              <CustomInputForm
                type="number"
                title="Harga Beli"
                name="price"
                placeholder="Harga Beli"
              />
              <CustomInputForm
                type="number"
                title="Harga Jual"
                name="salePrice"
                placeholder="Harga Jual"
              />
            </div>
          </SectionForm>
          <Separator class="my-6" />
          <SectionForm title="Product Quantity">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CustomInputForm
                  type="number"
                  title="Quantity"
                  name="quantity"
                  placeholder="Quantity"
                />
              </div>

              <div>
                <CustomInputForm
                  type="number"
                  title="Minimum Quantity"
                  name="quantityAlert"
                  placeholder="Minimum Quantity"
                />
              </div>
            </div>
          </SectionForm>
        </div>
        <div class="p-4 border rounded-md drop-shadow-sm bg-white">
          <SectionForm title="Product Image">
            <CustomInputForm
              type="file"
              name="image"
              title="Image"
              :handle-change="handleChange"
            />
            <!-- <img :src="" //> -->
          </SectionForm>
          <Separator class="my-6" />
          <SectionForm title="Product Attribute">
            <CustomSelectForm
              name="categoryOne"
              title="Category 1"
              placeholder="Pilih Kategori 1"
              :value="valueCatOne"
            />
            <CustomSelectForm
              v-if="showCategoryTwo"
              name="categoryTwo"
              title="Category 2"
              placeholder="Pilih Kategori 2"
              :value="valueCatTwo"
            />
            <CustomSelectForm
              v-if="showCategoryThree"
              name="categoryThree"
              title="Category 3"
              placeholder="Pilih Kategori 3"
              :value="valueCatThree"
            />
            <CustomSelectForm
              name="brands"
              title="Brands"
              placeholder="Pilih Brands"
              :value="DUMMY_CATEGORIES"
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

const DUMMY_CATEGORIES = [
  {
    name: "Category 1",
    value: "category_1",
  },
  {
    name: "Category 2",
    value: "category_2",
  },
  {
    name: "Category 3",
    value: "category_3",
  },
];

// Local State
const imagePreview = ref();

// Get Data
const { data } = getCategoryData();
const { data: secondData } = getSecondCategoryData();
const { data: thirdData } = getThirdCategoriesData();

// Mutate Data
const { mutate: mutateSecondCatData } = mutateSecondCategoryData();
const { mutate: mutateThirdCatData } = mutateThirdCategoryData();

// Form
const formSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(2, { message: "Must be at least 2 characters" })
      .max(50, { message: "Must be 50 characters or less" }),
    description: z
      .string()
      .min(2, { message: "Must be at least 2 characters" }),
    sku: z.string(),
    price: z.number().default(0),
    salePrice: z.number().default(0),
    categoryOne: z.string(),
    categoryTwo: z.optional(z.string()),
    categoryThree: z.optional(z.string()),
    brands: z.optional(z.string()),
    quantity: z
      .number()
      .min(1, { message: "Must be at least 2 characters" })
      .default(0),
    quantityAlert: z.optional(z.number()).default(0),
    weight: z.number().min(1).default(0),
    image: z.optional(z.array(z.any())),
  })
);

const { handleSubmit, values } = useForm({
  validationSchema: formSchema,
});

// Handle Side Effects
watch(values, (value) => {
  if (
    value.categoryOne &&
    !isEmpty(value.categoryOne) &&
    value.categoryOne !== "no"
  ) {
    values.categoryOne = "";
    values.categoryTwo = "";
    values.categoryThree = "";
  }
  if (
    value.categoryOne &&
    !isEmpty(value.categoryOne) &&
    value.categoryOne !== "no"
  ) {
    mutateSecondCatData(value.categoryOne);
    values.categoryTwo = "";
    values.categoryThree = "";
  }
  if (
    value.categoryTwo &&
    !isEmpty(value.categoryTwo) &&
    value.categoryTwo !== "no"
  ) {
    mutateThirdCatData(value.categoryTwo);
    values.categoryThree = "";
  }
});

// Call to Actions
const handleChange = (event: any) => {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    imagePreview.value = e.target?.result;
  };
};

// Handle UI
const { toast } = useToast();

const valueCatOne = computed(() => {
  const tempData: SelectForm[] = [];
  if (data.value && data.value.length > 0) {
    data.value.forEach((item) => {
      tempData.push({ name: item.name, value: item._id });
    });
  }
  return tempData;
});

const valueCatTwo = computed(() => {
  const tempData: SelectForm[] = [];
  if (secondData.value && secondData.value.length > 0) {
    secondData.value.forEach((item) => {
      tempData.push({ name: item.name, value: item._id });
    });
  }
  return tempData;
});

const valueCatThree = computed(() => {
  const tempData: SelectForm[] = [];
  if (thirdData.value && thirdData.value.length > 0) {
    thirdData.value.forEach((item) => {
      tempData.push({ name: item.name, value: item._id });
    });
  }
  return tempData;
});

const showCategoryTwo = computed(() => {
  return !isEmpty(secondData.value) && values.categoryOne;
});

const showCategoryThree = computed(() => {
  return !isEmpty(thirdData.value) && values.categoryTwo;
});

const onSubmit = handleSubmit((values) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("description", values.description);
  formData.append("price", values.salePrice.toString());
  formData.append(
    "category",
    values.categoryThree ?? values.categoryTwo ?? values.categoryOne
  );
  formData.append("sku", values.sku);
  formData.append("status", "inactive");
  formData.append("stock", values.quantity.toString());
  formData.append("minimumStock", values.quantityAlert.toString());
  if (values && values.image && values.image?.length > 0) {
    values.image.forEach((item) => {
      formData.append(`images`, item);
    });
  }

  console.log("Value Images: ", values.image);

  instance
    .post("/product/add", formData)
    .then((result) => {
      if (result.status === 201) {
        toast({
          title: "Produk berhasil ditambahkan.",
        });
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});
</script>

<style></style>
