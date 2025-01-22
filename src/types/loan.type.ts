import { IUser } from "./user.type";

interface BusinessInformation {
  id: number;
  businessName: string;
  businessRegNumber: string;
  industryType: string;
  loanRequestId: number;
  createdAt: string;
  updatedAt: string;
}

interface FinancialInformation {
  id: number;
  loanRequestId: number;
  annualRevenue: number;
  liabilities: number;
  expenses: number;
  createdAt: string;
  updatedAt: string;
}

export interface PersonalLoan {
  id: number;
  loanAmount: number;
  loanCurrency: string;
  loanPurpose: string;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  businessInformation: BusinessInformation;
  financialInformation: FinancialInformation;
  supportingDocuments: [];
  user: IUser;
}

export interface addLoanInfo {
  loanAmount: number;
  loanCurrency: string;
  companyType: string;
  businessName: string;
  industryType: string;
  businessRegNumber: string;
  loanPurpose: string;
  financialStatements: File[];
  annualRevenue: number;
  net_profit_margin: string;
  liabilities?: number;
  expenses: number;
  revenue_projections: string;
  businessRegCert: File[];
  identityDocument: File[];
}
