"use client";


import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
import { UserProvider } from "@/contexts/user.context";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/auth.context";
import { I18nProviderClient } from "../translations/clients";
import { Spinner } from "@/components/shared/spinner.component";

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
    <I18nProviderClient locale="en" fallback={
      <div className='flex h-screen w-screen items-center justify-center bg-white'>
        <Spinner />
      </div>
    }>
      <Toaster
        position="bottom-center"
      />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <FetchProvider>
            <UserProvider>
              <ThemeProvider>
                {children}
                </ThemeProvider>
            </UserProvider>
          </FetchProvider>
        </AuthProvider>
      </QueryClientProvider>
    </I18nProviderClient>
  );
};

