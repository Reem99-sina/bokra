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
}

export interface IUserResponse {
  result: {
    user?: IUser;
    token: string | null;
    status?: number;
    message?: string;
  };
}
export interface IUserRequest {
  email: string;
  password: string;
}
