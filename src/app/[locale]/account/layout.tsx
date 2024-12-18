"use client";

import { MobileTabs } from "@/components/account/mobile-tabs.component";
import { Sidebar } from "@/components/account/sidebar.component";
import withAuth from "@/components/account/with-auth";
import { Footer } from "@/components/layout/footer/footer-component";
import { Header } from "@/components/layout/header";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

const className = "ps-[3%]";

 function AccountLayout({ children }: Props) {

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <div className={clsx("flex flex-1 flex-col  sm:flex-row mt-[4rem] min-h-screen")}>
        <div className={clsx("hidden bg-black py-6 sm:block", className)}>
          <Sidebar />
        </div>
        <div className={clsx(" block  sm:hidden", className)}>
          <MobileTabs />
        </div>
        <div className="flex flex-1 border-t border-[rgb(222,222,222)] bg-white ">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default withAuth(AccountLayout)
