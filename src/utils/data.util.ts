import { useTranslation } from "@/translations/clients";
import { FaFileSignature, FaUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaShareAltSolid } from "react-icons/lia";
import { LuChartNoAxesCombined } from "react-icons/lu";
import {
  MdAgriculture,
  MdAutorenew,
  MdOutlineStrikethroughS,
} from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export const LinksData = () => {
  const { t } = useTranslation();

  return [
    {
      title: "",
      children: [
        {
          title: t("profile"),
          icon: FaUser,
          href: "/",
        },
        {
          title: t("personalLoan"),
          icon: GiTakeMyMoney,
          href: "/personal-loans",
        },
        {
          title: t("financialTransactions"),
          icon: FaMoneyBillTransfer,
          href: "/financial-transaction",
        },
        {
          title: t("loanRepayment"),
          icon: RiSecurePaymentLine,
          href: "/repayment",
        },
        {
          title: t("loanRenewal"),
          icon: MdAutorenew,
          href: "/renewal",
        },
      ],
    },
  ];
};

export const dataLoans = [
  {
    type: "Personal Loan",
    industry: "General",
    purpose: "Pay medical bills, consolidate debt, or fund personal projects",
    expectedGain: "Stress relief from financial burdens",
    problems: "High interest rates if credit score is low",
    duration: "1–5 years",
    amount: "$50,000",
  },
  {
    type: "Business Loan",
    industry: "Small Businesses",
    purpose: "Purchase equipment, hire staff, or expand business operations",
    expectedGain: "Increased revenue and business growth",
    problems: "Difficulty in approval for startups",
    duration: "5–10 years",
    amount: "$500,000",
  },
  {
    type: "Home Loan",
    industry: "Real Estate",
    purpose: "Purchase or build a home",
    expectedGain: "Long-term asset creation",
    problems: "Loss of property if payments fail",
    duration: "15–30 years",
    amount: "$1,000,000",
  },
  {
    type: "Car Loan",
    industry: "Automotive",
    purpose: "Purchase a personal or commercial vehicle",
    expectedGain: "Transportation or increased mobility",
    problems: "Depreciation of vehicle value",
    duration: "3–7 years",
    amount: "$100,000",
  },
  {
    type: "Education Loan",
    industry: "Education",
    purpose: "Pay tuition fees, buy study materials, or study abroad",
    expectedGain: "Better job prospects after graduation",
    problems: "Default risk if no job is secured",
    duration: "5–20 years",
    amount: "$200,000",
  },
  {
    type: "Agricultural Loan",
    industry: "Agriculture",
    purpose: "Purchase seeds, fertilizers, or farming equipment",
    expectedGain: "Increase in crop yields and farm profits",
    problems: "Natural disasters affecting crops",
    duration: "1–7 years",
    amount: "$100,000",
  },
  {
    type: "Startup Loan",
    industry: "Tech, Retail, etc.",
    purpose: "Fund a new business idea or MVP development",
    expectedGain: "High growth potential for the business",
    problems: "Difficulty in securing funds for first-time founders",
    duration: "1–5 years",
    amount: "$1,000,000",
  },
  {
    type: "Mortgage Loan",
    industry: "Real Estate",
    purpose: "Buy or invest in property",
    expectedGain: "Long-term investment returns",
    problems: "Fluctuations in property value",
    duration: "15–30 years",
    amount: "$500,000",
  },
  {
    type: "Payday Loan",
    industry: "Emergency",
    purpose: "Short-term financial emergencies",
    expectedGain: "Instant access to cash",
    problems: "Extremely high interest rates",
    duration: "2 weeks–1 month",
    amount: "$2,000",
  },
  {
    type: "Trade Finance Loan",
    industry: "Import/Export",
    purpose: "Facilitate international trade (purchase goods)",
    expectedGain: "Smooth trade operations and profit margins",
    problems: "Fluctuations in exchange rates",
    duration: "1–3 years",
    amount: "$10,000,000",
  },
];
export const technologyType = [
  {
    label: " education technology ",
    value: " education technology ",
  },
  {
    label: " logistics technology ",
    value: " logistics technology ",
  },
  {
    label: " agreetic technology ",
    value: " agreetic technology ",
  },
  {
    label: "healthletic technology",
    value: " healthletic technology ",
  },
  {
    label: "  reatial technology  ",
    value: " reatial technology ",
  },
];
export const loanCurreny = [
  {
    label: "EGP",
    value: "EGP",
  },
  {
    label: "USD",
    value: "USD",
  },
];
export const dataLoansDetail = {
  companyInformation: {
    companyName: "Tech Innovations Ltd.",
    industryPartner: "GlobalTech Solutions",
    companyType: "Limited Liability",
    businessRegistrationNumber: "1234567890",
    dateOfEstablishment: "2015-03-22",
    industrySector: "EdTech",
    companyWebsite: "https://www.techinnovations.com",
    companyLinkedIn: "https://www.linkedin.com/company/tech-innovations-ltd/",
  },
  contactInformation: {
    address: "123 Tech Street, Innovation City",
    city: "Tech City",
    governorate: "Tech Governate",
    contactPerson: "John Doe",
    phoneNumber: "+1234567890",
    emailAddress: "contact@techinnovations.com",
  },
  legalDocuments: {
    commercialRegistration:
      "https://www.techinnovations.com/legal/commercial-registration.pdf",
    taxCard: "https://www.techinnovations.com/legal/tax-card.pdf",
    supportingAgreements: [
      "https://www.techinnovations.com/legal/agreement1.pdf",
      "https://www.techinnovations.com/legal/agreement2.pdf",
    ],
  },
  financials: {
    annualRevenue: {
      previousYear: "5000000",
      currentYear: "6000000",
    },
    netProfitMargin: "15%",
    totalAssets: "15000000",
    totalLiabilities: "5000000",
    revenueProjections: "7000000",
    cashFlowForecasts: "2500000",
  },
  loanDetails: {
    loanAmountRequested: "2000000",
    purposeOfLoan: "Expansion into new markets",
    repaymentTerm: "5 years",
  },
  businessPlan: {
    businessGrowthStrategy: "Expand into emerging markets and invest in R&D.",
    majorMilestones: [
      {
        milestone: "Product launch in new market",
        date: "2024-06-01",
      },
      {
        milestone: "Achieve 30% market share",
        date: "2025-12-01",
      },
    ],
  },
  collateral: {
    assets: ["Company building", "Patent portfolio"],
  },
  managementTeam: {
    teamMembers: [
      {
        name: "Jane Smith",
        role: "CEO",
        experience: "10 years in tech industry leadership",
      },
      {
        name: "Michael Johnson",
        role: "CFO",
        experience: "8 years managing financials in tech startups",
      },
    ],
  },
  industryAnalysis: {
    industryLandscape:
      "The EdTech industry is growing rapidly with increased adoption of online learning platforms.",
    competition: "Top competitors include LearnCorp and EduNet.",
    marketTrends: "Shift towards AI-driven personalized learning experiences.",
  },
  additionalInformation: {
    involvedInLegalCases: "No",
  },
};

export const financialTransactions = [
  {
    transactionID: "TX123456789",
    transactionAmount: "100000",
    transactionDate: "2024-11-15",
    transactionType: "Debit",
    status: "upcoming",
    description: "Payment for project development",
    paymentMethod: "",
    senderReceiverInfo: {
      name: "John Doe",
      address: "123 Business Street, City",
      phone: "+1234567890",
      email: "johndoe@example.com",
    },
  },
  {
    transactionID: "TX123456789",
    transactionAmount: "100000",
    transactionDate: "2024-11-15",
    transactionType: "Debit",
    description: "Payment for project development",
    paymentMethod: "",
    status: "upcoming",
    senderReceiverInfo: {
      name: "John Doe",
      address: "123 Business Street, City",
      phone: "+1234567890",
      email: "johndoe@example.com",
    },
  },
  {
    transactionID: "TX123456789",
    transactionAmount: "100000",
    transactionDate: "2024-11-15",
    transactionType: "Credit",
    description: "Payment for project development",
    paymentMethod: "",
    status: "overdue",
    senderReceiverInfo: {
      name: "John Doe",
      address: "123 Business Street, City",
      phone: "+1234567890",
      email: "johndoe@example.com",
    },
  },
];

export const statusLoans = [
  {
    label: "paid",
    value: "paid",
  },
  {
    label: "unpaid",
    value: "unpaid",
  },
];

export const FilterHistoryLoans = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("status"),
      type: "select",
      options: statusLoans,
    },
  ];
};

export const DataTypeLoans = () => {
  const { t } = useTranslation();

  return [
    {
      head: t("partnership"),
      desc: t("desc_first_about"),
      icon: LiaShareAltSolid,
    },
    {
      head: t("speculation"),
      desc: t("desc_first_about"),
      icon: MdOutlineStrikethroughS,
    },
    { head: t("rent"), desc: t("desc_first_about"), icon: FaFileSignature },
    {
      head: t("profitable"),
      desc: t("desc_first_about"),
      icon: LuChartNoAxesCombined,
    },
    { head: t("ladder"), desc: t("desc_first_about"), icon: MdAgriculture },
  ];
};

export const ApprovalApplicationData = [
  {
    loanAmount: 50000, // Amount in USD
    companyType: "LLC", // Limited Liability Company
    businessRegNumber: "BR12345678", // Business Registration Number
    businessName: "Tech Innovators Inc.", // Name of the business
    industryType: "Technology", // Industry type
    loanPurpose: "Expand office space and purchase new equipment", // Purpose of the loan
    financialStatements: "financial-statements.pdf", // Path to uploaded file
    annualRevenue: 250000, // Annual revenue in USD
    expenses: 75000, // Annual expenses in USD
    liabilities: 30000, // Total liabilities in USD,
    status: "Approve",
    repaymentStatus: "upcoming",
    businessRegCert: "business-registration-cert.pdf", // Path to uploaded file
    identityDocument: "identity-document.jpeg", // Path to uploaded file
    loanCurrency: "EGP", // Currency for the loan
  },
  {
    loanAmount: 50000, // Amount in USD
    companyType: "LLC", // Limited Liability Company
    businessRegNumber: "BR12345678", // Business Registration Number
    businessName: "Tech Innovators Inc.", // Name of the business
    industryType: "Technology", // Industry type
    loanPurpose: "Expand office space and purchase new equipment", // Purpose of the loan
    financialStatements: "financial-statements.pdf", // Path to uploaded file
    annualRevenue: 250000, // Annual revenue in USD
    expenses: 75000, // Annual expenses in USD
    liabilities: 30000, // Total liabilities in USD
    status: "Approve",
    repaymentStatus: "upcoming",

    businessRegCert: "business-registration-cert.pdf", // Path to uploaded file
    identityDocument: "identity-document.jpeg", // Path to uploaded file
    loanCurrency: "USD", // Currency for the loan
  },
  {
    loanAmount: 50000, // Amount in USD
    companyType: "LLC", // Limited Liability Company
    businessRegNumber: "BR12345678", // Business Registration Number
    businessName: "Tech Innovators Inc.", // Name of the business
    industryType: "Technology", // Industry type
    loanPurpose: "Expand office space and purchase new equipment", // Purpose of the loan
    financialStatements: "financial-statements.pdf", // Path to uploaded file
    annualRevenue: 250000, // Annual revenue in USD
    expenses: 75000, // Annual expenses in USD
    liabilities: 30000, // Total liabilities in USD
    status: "Approve",
    repaymentStatus: "overdue",

    businessRegCert: "business-registration-cert.pdf", // Path to uploaded file
    identityDocument: "identity-document.jpeg", // Path to uploaded file
    loanCurrency: "USD", // Currency for the loan
  },
];
