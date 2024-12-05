"use client";

import { Footer } from "@/components/layout/footer/footer-component";
import { Header } from "@/components/layout/header";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <main className="z-0  h-screen">
      <div className="flex h-screen  w-screen   flex-col  overflow-x-hidden ">
        <Header />
        <div className="flex w-full flex-1 flex-col justify-center bg-beige">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
