import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import { PersonalLoan } from "@/types/loan.type";

export const useMyLoansQuery = () => {
  const { api } = useFetch();

  return useAuthenticatedQuery<IResponse<PersonalLoan[]>>({
    queryKey: ["my-loans"],
    queryFn: () => api.get("/loan/requests/mine"),
  });
};
