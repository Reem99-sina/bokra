import { ReactNode } from "react";
import DisplayDataComponent from "../shared/display-data.component";
import { useTranslation } from "@/translations/clients";
import { dataLoansDetail } from "@/utils/data.util";
import DocumnetReview from "../shared/documnet-review";
import { formattedAmount } from "@/utils/money.util";
import clsx from "clsx";
import { Checkbox } from "@material-tailwind/react";
import { LoanRequest } from "@/types/loan.type";

export const DataComponents = ({ loanId }: { loanId: LoanRequest }) => {
  const { t } = useTranslation();

  return [
    {
      title: t("companyInformation"),
      component: (
        <>
          <div className="flex flex-col flex-1 p-3 rounded gap-y-3">
            <DisplayDataComponent
              title={t("companyName")}
              value={loanId.businessInformation?.businessName}
            />
            <DisplayDataComponent
              title={t("IndustryPartnername")}
              value={loanId.businessInformation?.industryType}
            />
            <DisplayDataComponent
              title={t("companyType")}
              value={loanId.businessInformation?.businessRegNumber}
            />
            <DisplayDataComponent
              title={t("busRegistNumber")}
              value={loanId.businessInformation?.businessRegNumber}
            />
            <DisplayDataComponent
              title={t("datOfEst")}
              value={loanId.createdAt}
            />
            <DisplayDataComponent
              title={t("technologyType")}
              value={loanId.businessInformation?.industryType}
            />
            <DisplayDataComponent
              title={t("companyWebAddress")}
              value={dataLoansDetail?.companyInformation?.companyWebsite}
            />
            <DisplayDataComponent
              title={t("companyLinkedin")}
              value={dataLoansDetail?.companyInformation?.companyLinkedIn}
            />
            <div>
              <h3 className="font-black">{t("business_plan")}</h3>
            </div>
            <DisplayDataComponent
              title={t("problem")}
              value={loanId.financialInformation?.liabilities}
            />
            <DisplayDataComponent
              title={t("timelines")}
              value={dataLoansDetail?.businessPlan?.majorMilestones[0]?.date}
            />
          </div>
        </>
      ),
    },
    {
      title: t("contactInfo"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <DisplayDataComponent
            title={t("address")}
            value={dataLoansDetail?.contactInformation?.address}
          />
          <DisplayDataComponent
            title={t("city")}
            value={dataLoansDetail?.contactInformation?.city}
          />
          <DisplayDataComponent
            title={t("governorate")}
            value={dataLoansDetail?.contactInformation?.governorate}
          />
          <DisplayDataComponent
            title={t("personName")}
            value={dataLoansDetail?.contactInformation?.contactPerson}
          />
          <DisplayDataComponent
            title={t("datOfEst")}
            value={loanId.createdAt}
          />
          <DisplayDataComponent
            title={t("phoneNum")}
            value={loanId.user.phoneNumber}
          />
          <DisplayDataComponent title={t("email")} value={loanId.user.email} />
        </div>
      ),
    },
    {
      title: t("legalDoc"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <h3 className="font-black">{t("legalDoc")}</h3>
          {loanId.supportingDocuments.map((doc) => (
            <DocumnetReview
              key={doc.id}
              url={doc.filePath}
              style={{ borderRadius: "4px" }}
            />
          ))}
          <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
            <DisplayDataComponent
              title={t("loan_amount_requested")}
              value={formattedAmount({
                amount: Number(loanId.loanAmount),
              })}
            />
            <DisplayDataComponent
              title={t("proposed_repayment_desc")}
              value={dataLoansDetail?.loanDetails?.purposeOfLoan}
            />
            <DisplayDataComponent
              title={t("purposeCompany")}
              value={dataLoansDetail?.loanDetails?.purposeOfLoan}
            />
          </div>
        </div>
      ),
    },
    {
      title: t("financials"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <DisplayDataComponent
            title={t("Annual_Revenue")}
            value={loanId.financialInformation?.annualRevenue?.toString()}
          />
          <DisplayDataComponent
            title={t("net_profit_margin")}
            value={dataLoansDetail?.financials?.netProfitMargin}
          />
          <DisplayDataComponent
            title={t("total_asset")}
            value={formattedAmount({
              amount: Number(dataLoansDetail?.financials?.totalAssets),
            })}
          />
          <DisplayDataComponent
            title={t("total_liabilities")}
            value={formattedAmount({
              amount: Number(dataLoansDetail?.financials?.totalLiabilities),
            })}
          />
          <DisplayDataComponent
            title={t("revenue_projections")}
            value={formattedAmount({
              amount: Number(dataLoansDetail?.financials?.revenueProjections),
            })}
          />
          <DisplayDataComponent
            title={t("Cash_flow_forecasts")}
            value={formattedAmount({
              amount: Number(dataLoansDetail?.financials?.cashFlowForecasts),
            })}
          />
        </div>
      ),
    },
    {
      title: t("collateral"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <h3 className="font-black">{t("potential_collateral")}</h3>
          <DocumnetReview
            url={
              "https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44678.pdf"
            }
            style={{ borderRadius: "7px" }}
          />
        </div>
      ),
    },
    {
      title: t("management_team"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <DisplayDataComponent
            title={t("industry_landscape")}
            value={dataLoansDetail?.industryAnalysis?.industryLandscape}
          />
          <DisplayDataComponent
            title={t("competitors")}
            value={dataLoansDetail?.industryAnalysis?.competition}
          />
          <DisplayDataComponent
            title={t("marketTrends")}
            value={dataLoansDetail?.industryAnalysis?.marketTrends}
          />
        </div>
      ),
    },
    {
      title: t("additional_information"),
      component: (
        <div className=" flex flex-wrap gap-x-3 my-2 items-center">
          <Checkbox crossOrigin={undefined} />
          <h3 className="text-black font-bold text-sm">
            {t("terms_conditions")}
          </h3>
        </div>
      ),
    },
  ];
};
export const BorderBg3 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-bg3 py-[14px] px-3 rounded w-full flex flex-col gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};
