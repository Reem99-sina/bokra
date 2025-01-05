"use client";
import TitleComponent from "@/components/shared/title.component";
import { useTranslation } from "@/translations/clients";
import DataLoan from "@/components/account/renewal/data-renewal";

const Renew = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full container mx-auto">
      <div className="my-4 flex items-start">
        <TitleComponent title={t("loanRenewal")} />
      </div>
      <DataLoan />
    </div>
  );
};

export default Renew;
