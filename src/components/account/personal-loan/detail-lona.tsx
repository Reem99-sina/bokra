"use client";
import DisplayDataComponent from "@/components/shared/display-data.component";
import DocumnetReview from "@/components/shared/documnet-review";
import MainTitleComponent from "@/components/shared/main-title.component";
import { useTranslation } from "@/translations/clients";
import { dataLoansDetail } from "@/utils/data.util";
import { formattedAmount } from "@/utils/money.util";
import Image from "next/image";

const DetailLona = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-y-2 h-[80vh] overflow-y-auto text-black ">
      
      <div className="flex items-start gap-4 justify-start my-4 flex-wrap">
        <div className="">
          <Image
            src={"/business-loan.jpg"}
            width={350}
            height={250}
            alt="business-loan"
            className="max-h-[300px]  object-contain"
          />
        </div>
        <MainTitleComponent title={t("companyInformation")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <DisplayDataComponent
            title={t("companyName")}
            value={dataLoansDetail?.companyInformation?.companyName}
          />
          <DisplayDataComponent
            title={t("IndustryPartnername")}
            value={dataLoansDetail?.companyInformation?.industryPartner}
          />
          <DisplayDataComponent
            title={t("companyType")}
            value={dataLoansDetail?.companyInformation?.companyType}
          />
          <DisplayDataComponent
            title={t("busRegistNumber")}
            value={
              dataLoansDetail?.companyInformation?.businessRegistrationNumber
            }
          />
          <DisplayDataComponent
            title={t("datOfEst")}
            value={dataLoansDetail?.companyInformation?.dateOfEstablishment}
          />
          <DisplayDataComponent
            title={t("technologyType")}
            value={dataLoansDetail?.companyInformation?.industrySector}
          />
          <DisplayDataComponent
            title={t("companyWebAddress")}
            value={dataLoansDetail?.companyInformation?.companyWebsite}
          />
          <DisplayDataComponent
            title={t("companyLinkedin")}
            value={dataLoansDetail?.companyInformation?.companyLinkedIn}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("contactInfo")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
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
            value={dataLoansDetail?.companyInformation?.dateOfEstablishment}
          />
          <DisplayDataComponent
            title={t("phoneNum")}
            value={dataLoansDetail?.contactInformation?.phoneNumber}
          />
          <DisplayDataComponent
            title={t("email")}
            value={dataLoansDetail?.contactInformation?.emailAddress}
          />
        </div>
      </div>
      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("legalDoc")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <h3 className="font-black">{t("legalDoc")}</h3>
          <DocumnetReview
            url={dataLoansDetail?.legalDocuments?.commercialRegistration}
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("financials")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <DisplayDataComponent
            title={t("Annual_Revenue")}
            value={
              formattedAmount({
                amount: Number(
                  dataLoansDetail?.financials?.annualRevenue?.currentYear
                ),
              }) +
              " - " +
              formattedAmount({
                amount: Number(
                  dataLoansDetail?.financials?.annualRevenue?.previousYear
                ),
              })
            }
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
      </div>
      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("collateral")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <h3 className="font-black">{t("potential_collateral")}</h3>
          <DocumnetReview
            url={dataLoansDetail?.collateral?.assets[0]}
            style={{ borderRadius: "4px" }}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("loan_details")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <DisplayDataComponent
            title={t("loan_amount_requested")}
            value={formattedAmount({
              amount: Number(dataLoansDetail?.loanDetails?.loanAmountRequested),
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
      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("business_plan")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <DisplayDataComponent
            title={t("problem")}
            value={dataLoansDetail?.businessPlan?.businessGrowthStrategy}
          />
          <DisplayDataComponent
            title={t("timelines")}
            value={dataLoansDetail?.businessPlan?.majorMilestones[0]?.date}
          />
        </div>
      </div>

      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("management_team")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
          <DisplayDataComponent
            title={t("nameTeam")}
            value={dataLoansDetail?.managementTeam?.teamMembers[0]?.name}
          />
          <DisplayDataComponent
            title={t("postion")}
            value={dataLoansDetail?.managementTeam?.teamMembers[0]?.role}
          />
          <DisplayDataComponent
            title={t("yearsExperience")}
            value={dataLoansDetail?.managementTeam?.teamMembers[0]?.experience}
          />
        </div>
      </div>
      <div className="flex items-start gap-4 justify-start flex-wrap flex-col flex-1">
        <MainTitleComponent title={t("industry_analysis")} />
        <div className="flex flex-col bg-beige flex-1 p-3 rounded gap-y-3 w-full">
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
      </div>
    </div>
  );
};

export default DetailLona;
