import { useAuth } from "@/hooks/auth.hook";
import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IUser, LoginResponse, RegisterResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useUserQuery = () => {
  const { authData } = useAuth();

  return useAuthenticatedQuery<IUser>({
    queryKey: ["user", authData?.token],
    queryFn: async () => {
      return new Promise<IUser>((resolve) => {
        if (!authData?.user) {
          throw new Error("User not found");
        }

        resolve(authData?.user as IUser);
      });
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
        withCredentials: true, // Ensure cookies are sent if your backend uses them
        params: {
          ...Object.fromEntries(searchParams.entries()),
        },
      }),
  });
};
