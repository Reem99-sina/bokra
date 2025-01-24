"use client";

import { ScreenLoader } from "@/components/shared/screen-loader";
import { useAuth } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return <ScreenLoader />;
  }

  return children;
}
