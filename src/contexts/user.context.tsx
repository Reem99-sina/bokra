"use client";
import { useUserQuery } from "@/services/profile.service";
import { IUser } from "@/types/user.type";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import React, { createContext, useState } from "react";

interface UserContextType {
  user: IUser | undefined | null | { email: string; password: string };
  updateUser: (userData: { email: string; password: string }) => void;
  isLoadingUser: boolean;
  refetchUser: (
    options?: (RefetchOptions & RefetchQueryFilters) | undefined
  ) => Promise<QueryObserverResult<IUser, unknown>>;
}

type Props = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const { data: userResponse, refetch, isPending } = useUserQuery();
  const [user, setUser] = useState<{email:string,password:string}|null>(null);

  // Function to update user data
  const updateUser = (userData:{email:string,password:string}) => {
    setUser(userData);
  };
  const contextValue: UserContextType = {
    user: userResponse,
    refetchUser: refetch,
    updateUser:updateUser,
    isLoadingUser: isPending,
  };
 
  return (
    <UserContext.Provider
      value={{
        ...contextValue,
        user: contextValue?.user ? contextValue?.user : user,
        updateUser: updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
