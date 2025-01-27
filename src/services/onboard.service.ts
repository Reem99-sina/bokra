import { useFetch } from "@/hooks/fetch.hooks";
import { PersonalInfo, PersonalInfoResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";

export const usePersonalInfoMutation = () => {
  const { api } = useFetch();

  return useMutation<PersonalInfoResponse, { message: string,statusCode:number }, PersonalInfo>({
    mutationFn: (data) => {
      return api.post("/user/personal-information", data);
    },
  });
};
