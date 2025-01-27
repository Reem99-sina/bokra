import { useFetch } from "@/hooks/fetch.hooks";
import { CompanyInfo, CompanyInfoResponse, PersonalInfo, PersonalInfoResponse } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";

export const usePersonalInfoMutation = () => {
  const { api } = useFetch();

  return useMutation<PersonalInfoResponse, { message: string,statusCode:number }, PersonalInfo>({
    mutationFn: (data) => {
      return api.post("/user/personal-information", data);
    },
  });
};
export const useCompanyInfoMutation = () => {
    const { api } = useFetch();
  
    return useMutation<CompanyInfoResponse, { message: string,statusCode:number }, CompanyInfo>({
      mutationFn: (data) => {
        return api.post("/user/company-information", data);
      },
    });
  };