"use client";

import TitleComponent from "@/components/shared/title.component";
import { Tabs } from "@/components/shared/tabs.component";
import FinancialTransaction from "@/components/payment/financial-transaction";
import { useTranslation } from "@/translations/clients";
import RepaymentSchedule from "@/components/payment/repayment-schedule";

const Repayment = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full container mx-auto">
      <div className="my-4 flex items-start">
        <TitleComponent title={t("loanRepayment")} />
      </div>
      <Tabs
        tabs={[
          {
            title: t("repaymentSchedule"),
            Component: <RepaymentSchedule />,
          },
          {
            title: t("paymentHistory"),
            Component: <FinancialTransaction />,
          },
        ]}
        activeIndex={0}
      />
    </div>
  );
};

export default Repayment;
