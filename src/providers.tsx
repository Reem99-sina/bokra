"use client";

// import { I18nProviderClient } from "@/translations/clients";
import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
// import { Spinner } from "@/components/spinner.component";
import { UserProvider } from "@/contexts/user.context";
import { Toaster } from "react-hot-toast";
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
    <>
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
    </>
  );
};

