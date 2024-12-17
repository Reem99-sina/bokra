"use client";

import { Footer } from "@/components/layout/footer/footer-component";
import { Header } from "@/components/layout/header";
import HomeComponent from "@/components/home/home.component";
import AboutComponent from "@/components/home/about-component";
import ScrollAnimationExample from "@/components/scroll.compnent";
import StayUpdateComponent from "@/components/home/stay-update.component";

export default function Home() {
  return (
    <main className="z-0   transition-all bg-beige">
      <div className="flex   w-full   flex-col  overflow-x-hidden ">
        <Header />
        <section
          className="flex w-full flex-1 flex-col  bg-beige mt-14"
          id="home"
        >
          <ScrollAnimationExample>
            <HomeComponent />
          </ScrollAnimationExample>
        </section>
        <section
          id="about"
          className=" w-full  bg-beige  sm:h-screen h-auto pt-28 pb-4 justify-center items-center flex  flex-col"
        >
          <ScrollAnimationExample>
            <AboutComponent />
          </ScrollAnimationExample>
        </section>
        <section
          id="update"
          className=" w-full  bg-beige  sm:h-screen h-auto pt-28 pb-4 justify-center items-center flex  flex-col"
        >
          <ScrollAnimationExample>
            <StayUpdateComponent />
          </ScrollAnimationExample>
        </section>
        <Footer />
      </div>
    </main>
  );
}
