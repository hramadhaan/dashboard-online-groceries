import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { toast } from "~/components/ui/toast";

export const useCart = () => {
  return ref();
};

export const getUserCart = () => {
  const { data: dataAuth } = useAuth();
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await instance.get("/cart/list", {
        headers: {
          Authorization: dataAuth.value?.user.token,
        },
      });
      const data = response.data?.data ?? [];
      return data;
    },
  });

  return { data, isLoading, error };
};

export const addToCartMutation = () => {
  const queryClient = useQueryClient();
  const { data: dataAuth } = useAuth();
  const { error, mutate, reset } = useMutation({
    mutationFn: async (payload: any) => {
      const response = await instance.post("/cart/add", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: dataAuth.value?.user.token,
        },
      });
      const data = response.data?.data ?? [];
      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Product Added To Cart",
      })
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    }
  });

  return { error, mutate, reset };
};
