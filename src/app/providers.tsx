"use client";

import { FetchProvider } from "@/contexts/fetch.context";
import ThemeProvider from "@/theme/mui-theme-providers";
import { UserProvider } from "@/contexts/user.context";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/auth.context";
import dynamic from "next/dynamic";
import { ScreenLoader } from "@/components/shared/screen-loader";

const I18nProviderClient = dynamic(
  () => import("../translations/clients").then((mod) => mod.I18nProviderClient),
  { ssr: false }
);

interface Props {
  children: React.ReactNode;
  locale: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers = ({ children, locale }: Props) => {
  return (
    <I18nProviderClient
      locale={locale}
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-white">
          <ScreenLoader />
        </div>
      }
    >
      <ToastContainer position="top-left" />

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
