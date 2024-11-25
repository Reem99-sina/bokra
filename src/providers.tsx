"use client";

import { I18nProviderClient } from "@/translations/clients";
import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
import { Spinner } from "@/components/spinner.component";
import { UserProvider } from "@/contexts/user.context";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/auth.context";

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
      locale="ar"
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-white">
          <Spinner />
        </div>
      }
    >
      <ToastContainer
        limit={3}
        position="bottom-center"
        autoClose={3000}
        // enableMultiContainer={false}
        theme="colored"
        style={{ zIndex: 100000 }}
        rtl={true}
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

