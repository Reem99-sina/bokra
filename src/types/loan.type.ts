export interface PersonalLoan {
  type: string; // Type of loan (e.g., Personal Loan, Business Loan, etc.)
  industry: string; // Industry associated with the loan (e.g., Real Estate, Education, etc.)
  purpose: string; // Purpose of the loan
  expectedGain: string; // Expected benefit from taking the loan
  problems: string; // Potential problems or risks
  duration: string; // Duration of the loan (e.g., 1-5 years)
  amount: string;
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
