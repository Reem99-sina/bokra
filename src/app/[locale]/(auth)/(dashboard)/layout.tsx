"use client";
import { Footer } from "@/components/layout/footer/footer-component";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sideBar";

interface Props {
  children: React.ReactNode;
}

export default function Dashboard({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      <div className="flex flex-1 w-full">
        <div className="h-full bg-[#F7F7F7] bg-opacity-20 p-4 ">
          <SideBar />
        </div>

        <main className="flex flex-1 w-full justify-start px-4 bg-white p-4">
          <div className="flex h-full w-full flex-col overflow-x-hidden">
            <div className="flex w-full flex-1 flex-col ">{children}</div>
          </div>
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
