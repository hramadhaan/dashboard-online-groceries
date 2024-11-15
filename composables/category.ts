import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { toast } from "~/components/ui/toast";

export const useCategory = () => {
  return ref();
};

export const getCategoryData = () => {
  const { data, isLoading, error } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await instance.get("/category/list");
      const data = response.data?.data ?? [];
      return data;
    },
  });

  return { data, isLoading, error };
};

// Second Categories
export const getSecondCategoryData = () => {
  const { data, isLoading, error } = useQuery<Category[]>({
    queryKey: ["secondCategories"],
    initialData: [],
  });

  return { data, isLoading, error };
};

export const mutateSecondCategoryData = () => {
  const queryClient = useQueryClient();
  const { error, mutate, reset } = useMutation({
    mutationFn: async (id: string) => {
      const response = await instance.get(`/category/list/${id}`);
      const data = response.data?.data ?? [];
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["secondCategories"], data);
      queryClient.invalidateQueries({ queryKey: ["secondCategories"] });
    },
  });

  return { error, mutate, reset };
};

// Third Categories
export const getThirdCategoriesData = () => {
  const { data, isLoading, error } = useQuery<Category[]>({
    queryKey: ["thirdCategories"],
    initialData: [],
  });

  return { data, isLoading, error };
};

export const mutateThirdCategoryData = () => {
  const queryClient = useQueryClient();
  const { error, mutate, reset } = useMutation({
    mutationFn: async (id: string) => {
      const response = await instance.get(`/category/list/${id}`);
      const data = response.data?.data ?? [];
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["thirdCategories"], data);
      queryClient.invalidateQueries({ queryKey: ["thirdCategories"] });
    },
  });

  return { error, mutate, reset };
};

export const deleteCategory = () => {
  const { data: dataAuth } = useAuth();
  const queryClient = useQueryClient();
  const { error, mutate, reset } = useMutation({
    mutationFn: async (id: string) => {
      const response = await instance.get(`/category/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${dataAuth.value?.user.token}`,
        },
      });
      const data = response.data?.data ?? [];
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast({
        title: "Success",
        description: "Category Deleted Successfully",
      });
    },
    onError: (err) => {
      toast({
        variant: "destructive",
        title: err?.code ?? "Terjadi Kesalahan",
        description:
          err?.message ??
          "Tidak dapat menghapus kategori ini, silahkan coba lagi.",
      });
    },
  });

  return { error, mutate, reset };
};
