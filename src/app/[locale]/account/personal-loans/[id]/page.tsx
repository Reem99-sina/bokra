"use client";
import { LoanDetails } from "@/components/account/personal-loan/loan-details";
import { Spinner } from "@/components/shared/spinner.component";
import { useGetLoanByIdQuery } from "@/services/loan.service";
import { useParams } from "next/navigation";

const LoanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetLoanByIdQuery(id);

  const loan = data?.result;

  if (!loan) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container mb-8 mt-3 mx-auto flex flex-col gap-y-5 ">
      <LoanDetails loan={loan} />
    </div>
  );
};

export default LoanDetailsPage;
