import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { toast } from "~/components/ui/toast";

export const useProduct = () => {
  return ref();
};

export const getAllProducts = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await instance.get("/product/list");
      const data = response.data?.data ?? [];
      return data;
    },
  });

  return { data, isLoading, error };
};

export const createProduct = () => {
  const queryClient = useQueryClient();
  const { data: dataAuth } = useAuth();
  const { mutate, error, reset } = useMutation({
    mutationFn: async (payload: any) => {
      console.log('Form Data: ', payload)
      const response = await instance.post("/product/add", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${dataAuth.value?.user.token}`,
        },
      });
      const data = response.data?.data ?? [];
      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Product Created Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => {
      toast({
        title: "Error",
        variant: "destructive",
        description: err.message,
      });
    },
  });

  return { mutate, error, reset };
};
