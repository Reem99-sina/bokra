"use client";

import { MobileTabs } from "@/components/account/mobile-tabs.component";
import { Sidebar } from "@/components/account/sidebar.component";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

const className = "ps-[3%]";

function AccountLayout({ children }: Props) {
  return (
    <div className="flex flex-1 flex-col">
      <div className={clsx("flex flex-1 flex-col  sm:flex-row min-h-auto")}>
        <div
          className={clsx(
            "hidden sm:block mt-[18px] h-full bg-beige bg-opacity-20 ps-4",
            className
          )}
        >
          <Sidebar />
        </div>
        <div className={clsx(" block  sm:hidden bg-bg3 mt-7", className)}>
          <MobileTabs />
        </div>
        <div className="flex flex-1  bg-white  sm:container w-full mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
export default AccountLayout;
