export interface IUser {
  id: number;
  email: string;
  username: string;
  status: "active";
  createdAt: string;
  updatedAt: string;
  userType: "admin" | "manager" | "employee";
  phone: string | undefined;
  image: string | undefined;
  val_license: string;
  street: string;
  district: string;
  city: string;
  nationality: string;
  birthDate: Date | string;
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
    user: {
      profileImage: string;
      status: string;
      id: number;
      fullName: string;
      email: string;
      phoneNumber: string;
      password: string;
      industryField: string;
      idImage: string;
      username: string;
      updatedAt: string;
      createdAt: string;
      accessToken: null;
      refreshToken: null;
    };
  };
}
