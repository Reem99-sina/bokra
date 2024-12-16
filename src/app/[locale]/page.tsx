"use client";

import { Footer } from "@/components/layout/footer/footer-component";
import { Header } from "@/components/layout/header";
import HomeComponent from "@/components/home/home.component";
import AboutComponent from "@/components/home/about-component";

export default function Home() {
  
  return (
    <main className="z-0   transition-all">
      <div className="flex   w-screen   flex-col  overflow-x-hidden ">
        <Header />
        <section className="flex w-full flex-1 flex-col  bg-beige " id="home">
          <HomeComponent />
        </section>
        <section
          id="about"
          className=" w-full  bg-beige  sm:h-screen h-auto py-4 justify-center items-center flex  flex-col"
        >
          <AboutComponent />
        </section>
        <Footer />
      </div>
    </main>
  );
}
