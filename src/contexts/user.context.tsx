"use client";
import { useUserQuery } from "@/services/profile.service";
import { IUser } from "@/types/user.type";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import React, { createContext } from "react";

interface UserContextType {
  user: IUser | undefined | null | { email: string; password: string };
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

  const contextValue: UserContextType = {
    user: userResponse,
    refetchUser: refetch,
    isLoadingUser: isPending,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
