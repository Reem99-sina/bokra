export interface IUser {
  fullName: string;
  id: number;
  email: string;
  username: string;
  password: string;
  industryField: "IT" | "business Owner";
  phoneNumber: string;
  status: "pending";
  createdAt: string;
  updatedAt: string;
  idImage: null;
  profileImage: null;
  accessToken: null;
  refreshToken: null;
}

export interface IUserResponse {
  result: {
    user?: IUser;
    token: string | null;
    status?: number;
    message?: string;
  };
}
export interface IUserRegisterRequest {
  fullName: string;
  email: string;
  password: string;
  repeatePassword: string;
  phoneNumber: string;
  file: File;
  industryField: string;
}
export interface IUserRequest {
  email: string;
  password: string;
}
export interface IUserForgetRequest {
  email: string;
}
export interface RenewpasswordRequest {
  password: string;
  repeatPassword: string;
}
export interface UserInput {
  name: string;
  street: string;
  district: string;
  city: string;
  email: string;
  nationality: string;
  phone: string;
  birthDate: Date | string;
  agreeTerms1: boolean;
  agreeTerms2: boolean;
}
export interface LoginResponse {
  message: string;
  result: {
    user: IUser;
    token: string;
  };
}
export interface RegisterResponse {
  message: string;
  result: {
    user: IUser;
    token: string;
  };
}

export interface PersonalInfo {
  contactPersonName: string;
  phoneNumber: string;
  governorate: string;
  city: string;
  address: string;
}
export interface PersonalInfoResponse {
  message: string;
  result: PersonalInfo & {
    userId: number;
    updatedAt: string;
    createdAt: string;
    id: number;
  };
  status: number;
}
export interface PresonalError {
  message: string;
  status: number;
}
