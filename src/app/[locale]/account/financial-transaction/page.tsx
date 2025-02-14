"use client";

import TitleComponent from "@/components/shared/title.component";
import FinancialTransaction from "@/components/payment/financial-transaction";
import { useTranslation } from "@/translations/clients";


const FinancialTransactionHistory = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full container mx-auto">
      <div className="my-4 flex items-start">
        <TitleComponent title={t("financialTransactions")} />
      </div>
      <FinancialTransaction />
    </div>
  );
};

export default FinancialTransactionHistory;
