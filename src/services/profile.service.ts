import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import { IUser, LoginResponse, RegisterResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useUserQuery = () => {
  const { api } = useFetch();

  return useAuthenticatedQuery<IUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const response: IResponse<{ user: IUser }> = await api.get("/user");

      return response.result?.user;
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

export const useLoginWithSocialMutation = (provider: string) => {
  const { api } = useFetch();
  const searchParams = useSearchParams();

  return useMutation<LoginResponse, { message: string }, void>({
    mutationFn: () =>
      api.get(`/auth/${provider}/callback`, {
        params: {
          ...Object.fromEntries(searchParams.entries()),
        },
      }),
  });
};

export const useForgetPasswordMutation = () => {
  const { api } = useFetch();

  return useMutation<LoginResponse, { message: string }, { email: string }>({
    mutationFn: (data) => {
      return api.post("/auth/forget-password", data);
    },
  });
};

export const useResetPasswordMutation = (token: string) => {
  const { api } = useFetch();

  return useMutation<
    { message: string },
    { message: string },
    { newPassword: string; confirmNewPassword: string }
  >({
    mutationFn: (data) => {
      return api.post("/auth/reset-password", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};
