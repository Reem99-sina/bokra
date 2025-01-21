"use client";

import React, { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { OverflowLoading } from "@/components/shared/overflow-loading";
import { useAuth } from "@/hooks/auth.hook";
import { useLoginWithSocialMutation } from "@/services/profile.service";

const providers = ["google", "facebook", "apple"];

const GoogleCallbackHandler: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { provider } = useParams();
  const { authenticate } = useAuth();

  const { mutateAsync: loginWithSocial } = useLoginWithSocialMutation(
    provider as string
  );

  useEffect(() => {
    if (!router) return;
    if (!searchParams) return;

    if (!providers.includes(provider as string)) {
      router.push("/login");

      return;
    }

    fetchUserCredentials();
  }, [router, searchParams, provider]);

  const fetchUserCredentials = async () => {
    try {
      const response = await loginWithSocial();
      if (response?.result) {
        authenticate(response?.result);
        router.push("/");
      } else {
        throw new Error("Failed to login with social");
      }
    } catch (error) {
      router.push("/login");
    }
  };

  return <OverflowLoading />;
};

export default GoogleCallbackHandler;
