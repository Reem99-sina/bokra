"use client";

import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
import { UserProvider } from "@/contexts/user.context";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/auth.context";
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import { Spinner } from "@/components/shared/spinner.component";

const I18nProviderClient = dynamic(
  () => import("../translations/clients").then((mod) => mod.I18nProviderClient),
  { ssr: false }
);

interface Props {
  children: React.ReactNode;
  locale:string
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children,locale }: Props) => {
  
  return (
    <I18nProviderClient locale={locale} fallback={
      <div className='flex h-screen w-screen items-center justify-center bg-white'>
        <Spinner />
      </div>
    }>
      <Toaster position="bottom-center" />
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <FetchProvider>
              <UserProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </UserProvider>
            </FetchProvider>
          </AuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </I18nProviderClient>
  );
};
