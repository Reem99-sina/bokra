import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IUser, LoginResponse, RegisterResponse } from "@/types/user.type";
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

  return useMutation<
    LoginResponse,
    { message: string },
    { email: string; password: string }
  >({
    mutationFn: (data) => {
      return api.post("/auth/login", data);
    },
  });
};

export const useRegisterMutation = () => {
  const { api } = useFetch();

  return useMutation<
    RegisterResponse,
    { message: string },
    {
      fullName: string;
      email: string;
      password: string;
      repeatePassword: string;
      phoneNumber: string;
      file: File;
      industryField: string;
    }
  >({
    mutationFn: (data) => {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("repeatePassword", data.repeatePassword);
      formData.append("phoneNumber", data.phoneNumber);
      formData.append("file", data.file);
      formData.append("industryField", data.industryField);

      return api.post("/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });
};
