"use client";
import LoanDetails from "@/components/account/personal-loan/loan-details";
import { Spinner } from "@/components/shared/spinner.component";
import { useGetLoanRequestIdQuery } from "@/services/loan.service";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const loanRequestId = Number(params.id);

  const { data } = useGetLoanRequestIdQuery(loanRequestId);

  if (!data) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mb-8 mt-3 mx-auto flex flex-col gap-y-5 ">
      <LoanDetails GetLoanById={data} />
    </div>
  );
};

export default DetailPage;
