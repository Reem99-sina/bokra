import { config } from "@/config";
import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IUser, IUserRequest, IUserResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";

export const useUserQuery = () => {
  // const { api } = useFetch();

  return useAuthenticatedQuery<IUser>({
    queryKey: ["user"],
    queryFn: async () => {
      return new Promise<IUser>((resolve) => {
        setTimeout(() => {
          resolve({
            birthDate: "",
            id: 1,
            email: "mustafa@bokra.com",
            username: "mustafa",
            status: "active",
            createdAt: "",
            updatedAt: "",
            userType: "employee",
            val_license: "",
            street: "",
            district: "",
            city: "",
            nationality: "SA",
            image: undefined,
            phone: undefined,
          });
        }, 2000);
      });
      // const response: {
      //   data: IUser;
      // } = await api.get("/user");

      // return response?.data || null;
    },
  });
};

export const useLoginMutation = () => {
  const { api } = useFetch();

  return useMutation<IUserResponse, null, IUserRequest>({
    mutationFn: (data) => {
      return api.post("/", data, {
        baseURL: config.NEXT_PUBLIC_BASE_URL,
      });
    },
  });
};
