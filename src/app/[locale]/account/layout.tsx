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
    <div className="flex flex-1 flex-col">
      <div className={clsx("flex flex-1 flex-col  sm:flex-row min-h-auto")}>
        <div
          className={clsx("hidden sm:block h-full bg-beige bg-opacity-20 ps-4")}
        >
          <Sidebar />
        </div>
        <div className={clsx(" block  sm:hidden bg-bg3")}>
          <MobileTabs />
        </div>
        <div className="flex flex-1 pb-8  bg-white  sm:container w-full mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
export default AccountLayout;
