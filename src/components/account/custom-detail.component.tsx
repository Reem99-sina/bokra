import { ReactNode } from "react";
import DisplayDataComponent from "../shared/display-data.component";
import { dataLoansDetail } from "@/utils/data.util";
import DocumnetReview from "../shared/documnet-review";
import { formattedAmount } from "@/utils/money.util";
import clsx from "clsx";
import { PersonalLoan } from "@/types/loan.type";
import moment from "moment";

export const getLoanDetailsItems = ({
  loanDetails,
  t,
}: {
  loanDetails: PersonalLoan;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}) => {
  return [
    {
      title: t("companyInformation"),
      component: (
        <>
          <div className="flex flex-col flex-1 p-3 rounded gap-y-3">
            <DisplayDataComponent
              title={t("companyName")}
              value={loanDetails.businessInformation?.businessName}
            />
            <DisplayDataComponent
              title={t("IndustryPartnername")}
              value={loanDetails.user.fullName}
            />
            <DisplayDataComponent
              title={t("companyType")}
              value={dataLoansDetail.companyInformation.companyType}
            />
            <DisplayDataComponent
              title={t("busRegistNumber")}
              value={loanDetails.businessInformation?.businessRegNumber}
            />
            <DisplayDataComponent
              title={t("datOfEst")}
              value={moment(
                dataLoansDetail.companyInformation.dateOfEstablishment
              ).format("YYYY / MM / DD")}
            />
            <DisplayDataComponent
              title={t("technologyType")}
              value={loanDetails.businessInformation?.industryType}
            />

            <div>
              <h3 className="font-black">{t("business_plan")}</h3>
            </div>
            <DisplayDataComponent
              title={t("problem")}
              value={loanDetails.financialInformation?.liabilities}
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
            value={loanDetails.user.fullName}
          />

          <DisplayDataComponent
            title={t("phoneNum")}
            value={loanDetails.user.phoneNumber}
          />
          <DisplayDataComponent
            title={t("email")}
            value={loanDetails.user.email}
          />
        </div>
      ),
    },
    {
      title: t("legalDoc"),
      component: (
        <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
          <h3 className="font-black">{t("legalDoc")}</h3>
          <div className="flex gap-1">
            {loanDetails.supportingDocuments.map((doc) => (
              <DocumnetReview
                key={doc.id}
                url={doc.filePath}
                style={{ borderRadius: "4px", width: "100px", height: "100px" }}
              />
            ))}
          </div>
          <div className="flex flex-col  flex-1 p-3 rounded gap-y-3">
            <DisplayDataComponent
              title={t("loan_amount_requested")}
              value={formattedAmount({
                amount: Number(loanDetails.loanAmount),
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
            value={loanDetails.financialInformation?.annualRevenue?.toString()}
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
            style={{ borderRadius: "4px", width: "100px", height: "100px" }}
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
