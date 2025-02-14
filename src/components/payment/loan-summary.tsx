import { useTranslation } from "@/translations/clients";
import CardDetail from "../shared/card-detail";
import { CiWarning } from "react-icons/ci";

const LoanSummary = () => {
  const { t } = useTranslation();

  return (
    <div className="text-black  flex items-start gap-5  flex-col">
      <CardDetail className="border-grayLight border rounded-md p-5 flex flex-col gap-7">
        <div>
          <h3 className="text-md font-bold">{t("loanSummary")}</h3>
          <p className="font-light text-xs text-siderBarColor">
            {" "}
            {t("overviewCurrent")}
          </p>
        </div>
        <div className="flex items-center gap-7 flex-wrap">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-black">{t("totalLoan")}</h3>
            <p className="font-black text-xs text-siderBarColor">$50,000.00</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-black">{t("remainingBalance")}</h3>
            <p className="font-black text-xs text-siderBarColor">$40,000.00</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-black">{t("interestRate")}</h3>
            <p className="font-black text-xs text-siderBarColor">5%</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-black">{t("loanTerm")}</h3>
            <p className="font-black text-xs text-siderBarColor">24 months</p>
          </div>
        </div>
      </CardDetail>
      <CardDetail className="border-grayLight border rounded-md p-5">
        <div className="flex items-center gap-4">
          <CiWarning />
          <div className="flex flex-col gap-2">
            <h3>{t("ipcomingPayment")}</h3>
            <p className="font-light text-xs text-siderBarColor">
              {t("ipcomingDesc")}
            </p>
          </div>
          
        </div>
      </CardDetail>
     
    </div>
  );
};

export default LoanSummary;
