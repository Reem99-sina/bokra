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
  companyName: string;
  industryPartnername:string;
  companyType:string;
  industry: string;
  busRegistNumber:string;
  datOfEst:Date|string;
  purposeOfCompany: string;
  companyWebAddress:string;
  companyLinkedin:string;
  gainCompany: string;
  problem: string;
  amountMoney: string;
  duration: string;
  files?: File[];
  address:string;
  city:string;
  governorate:string;
  personName:string;
  phoneNum:string;
  email:string;
  annual_revenue:string,
  net_profit_margin:string,
  total_asset:string,
  total_liabilities:string,
  revenue_projections:string,
  Cash_flow_forecasts:string,
  loan_amount_requested:string
}
