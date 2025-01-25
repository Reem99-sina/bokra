"use client";

import { MobileTabs } from "@/components/account/mobile-tabs.component";
import { Sidebar } from "@/components/account/sidebar.component";
import { useUser } from "@/hooks/user.hooks";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function AccountLayout({ children }: Props) {
  const { isLoadingUser, user } = useUser();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!user && !isLoadingUser) {
      router.replace("/");
    }
  }, [user, isLoadingUser]);

  return (
    <div className="flex flex-1 flex-col bg-bg3">
      <div className="container mx-auto flex-1 flex flex-col">
        <div className={clsx("flex flex-1 flex-col  sm:flex-row")}>
          <div className={clsx("hidden sm:block h-full bg-opacity-20")}>
            <Sidebar />
          </div>
          <div className={clsx(" block  sm:hidden bg-bg3")}>
            <MobileTabs />
          </div>
          <div className="container  flex  flex-1  bg-white py-8 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountLayout;
