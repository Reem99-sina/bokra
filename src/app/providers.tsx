"use client";

import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
import { UserProvider } from "@/contexts/user.context";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/auth.context";
import dynamic from "next/dynamic";

const I18nProviderClient = dynamic(
  () => import("../translations/clients").then((mod) => mod.I18nProviderClient),
  { ssr: false }
);

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children }: Props) => {
  return (
    <I18nProviderClient
      locale="en"
    >
      <Toaster position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <FetchProvider>
            <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
            </UserProvider>
          </FetchProvider>
        </AuthProvider>
      </QueryClientProvider>
    </I18nProviderClient>
  );
};
