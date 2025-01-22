import { useAuthenticatedQuery } from "@/hooks/authenticated-query.hook";
import { useFetch } from "@/hooks/fetch.hooks";
import { IResponse } from "@/types/common.type";
import { LoanForm, PersonalLoan } from "@/types/loan.type";
import { useMutation } from "@tanstack/react-query";

export const useMyLoansQuery = () => {
  const { api } = useFetch();

  return useAuthenticatedQuery<IResponse<PersonalLoan[]>>({
    queryKey: ["my-loans"],
    queryFn: () => api.get("/loan/requests/mine"),
  });
};

export const useAddLoanMutation = () => {
  const { api } = useFetch();

  return useMutation({
    mutationFn: async (data: LoanForm) => {
      const loanRequest = {
        loanAmount: data.loanAmount,
        loanCurrency: data.loanCurrency,
        loanPurpose: data.loanPurpose,
        businessName: data.businessName,
        businessRegNumber: data.businessRegNumber,
        industryType: data.industryType,
        annualRevenue: data.annualRevenue,
        liabilities: data.liabilities,
        expenses: data.expenses,
      };

      const loanResponse: IResponse<PersonalLoan> = await api.post(
        "/loan",
        loanRequest
      );

      return loanResponse;
    },
  });
};

export const useSubmitLoanDocumentsMutation = () => {
  const { api } = useFetch();

  return useMutation({
    mutationFn: async (data: LoanForm & { loanId: number }) => {
      const loanDocumentsRequest = new FormData();
      loanDocumentsRequest.append(
        "financialStatement",
        data.financialStatement
      );
      loanDocumentsRequest.append("businessRegCert", data.businessRegCert);
      loanDocumentsRequest.append("identityDocument", data.identityDocument);

      await api.post(
        `/loan/support-document/${data.loanId}`,
        loanDocumentsRequest
      );

      return true;
    },
  });
};
