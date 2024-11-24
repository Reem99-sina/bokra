
import { config } from "@/config";
import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IUser, IUserRequest, IUserResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";
export const useUserQuery = () => {
  const { api } = useFetch();
  return useAuthenticatedQuery<IUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const response: {
        data: IUser;
      } = await api.get("/user");
      return response?.data || null;
    },
  });
};
export const useLoginMutation = () => {
  const { api } = useFetch();
  return useMutation<IUserResponse, null, IUserRequest>({
    mutationFn: (data) => {
      return api.post("/admin/login", data, {
        baseURL: config.NEXT_PUBLIC_BASE_URL,
      });
    },
  });
};