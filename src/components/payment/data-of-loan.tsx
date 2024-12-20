import { useTranslation } from "@/translations/clients";
import { dataLoansDetail } from "@/utils/data.util";
import { formattedAmount } from "@/utils/money.util";
import Image from "next/image";

const DataOfLoan = () => {
  const { t } = useTranslation();
  
  return (
    <div className="border border-grayLight rounded-lg p-3 flex items-start gap-x-6">
      <Image src="/business-loan.jpg" width={100} height={100} alt="home" />
      <div className="flex flex-col text-black items-center gap-4">
        <h3 className="font-bold ">
          {dataLoansDetail?.companyInformation?.companyName}
        </h3>
        <p className=" bg-gray-200 p-2 text-xs rounded-lg">
          {dataLoansDetail?.companyInformation?.companyType}
        </p>
        <p>
          {t("price")}:
          {formattedAmount({
            amount: Number(dataLoansDetail?.loanDetails?.loanAmountRequested),
          })}
        </p>
      </div>
    </div>
  );
};

export default DataOfLoan;
