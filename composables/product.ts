import { useQuery } from "@tanstack/vue-query";

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
