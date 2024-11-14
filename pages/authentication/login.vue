<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <Card class="w-2/6">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription
          >Welcome Back ! Please enter your details.</CardDescription
        >
      </CardHeader>
      <CardContent>
        <form
          method="post"
          @submit="onSubmit"
          class="flex flex-col items-start w-full"
        >
          <div class="flex flex-col w-full gap-y-2">
            <CustomInputForm type="email" title="Email" name="email" />
            <CustomInputForm type="password" title="Password" name="password" />
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

definePageMeta({
  layout: "authentication",
  auth: {
    navigateAuthenticatedTo: "/",
  },
});

const { status, signIn } = useAuth();

console.log("Status: ", status.value);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(1),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  await signIn("credentials", {
    email: values.email,
    password: values.password,
  });
  // console.log("Values: ", values);
});
</script>

<style></style>
