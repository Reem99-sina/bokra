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

interface SupportingDocument {
  id: number;
  loanRequestId: number;
  documentType: string;
  filePath: string;
  fileType: string;
  fileSize: number;
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
  supportingDocuments: SupportingDocument[];
  user: IUser;
}

export interface AddLoanRequest {
  loanAmount: number;
  loanCurrency: string;
  loanPurpose: string;
  businessName: string;
  businessRegNumber: string;
  industryType: string;
  annualRevenue: number;
  liabilities: number;
  expenses: number;
}

export interface LoanDocumentsRequest {
  financialStatement: File;
  businessRegCert: File;
  identityDocument: File;
}

export type LoanForm = AddLoanRequest & LoanDocumentsRequest;
