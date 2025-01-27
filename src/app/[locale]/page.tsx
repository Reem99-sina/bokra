"use client";

import HomeComponent from "@/components/home/home.component";
import AboutComponent from "@/components/home/about-component";
import ScrollAnimationExample from "@/components/scroll.compnent";
import StayUpdateComponent from "@/components/home/stay-update.component";
import OurSectionComponent from "@/components/home/our-section.component";
import TypeLoanComponent from "@/components/home/type-loan.component";
import { useUser } from "@/hooks/user.hooks";

export default function Home() {
  const { user } = useUser();

  return (
    <main className="z-0   transition-all bg-beige">
      <div className="flex   w-full   flex-col">
        <section className="flex w-full flex-1 flex-col  bg-beige" id="home">
          <ScrollAnimationExample>
            <HomeComponent />
          </ScrollAnimationExample>
        </section>
        <section
          id="about"
          className=" w-full  bg-beige   h-auto pt-36 pb-4 justify-center items-center flex  flex-col"
        >
          <ScrollAnimationExample>
            <AboutComponent />
          </ScrollAnimationExample>
        </section>
        <section
          id="type"
          className=" w-full  bg-beige   h-auto pt-36 pb-4 justify-center items-center flex  flex-col"
        >
          <ScrollAnimationExample>
            <TypeLoanComponent />
          </ScrollAnimationExample>
        </section>
        <section
          id="our"
          className=" w-full  bg-beige   h-auto pt-36 pb-4 justify-center items-center flex  flex-col"
        >
          <ScrollAnimationExample>
            <OurSectionComponent />
          </ScrollAnimationExample>
        </section>
        {!user ? (
          <section
            id="contact"
            className=" w-full  bg-beige   h-auto pt-28 pb-4 justify-center items-center flex  flex-col"
          >
            <ScrollAnimationExample>
              <StayUpdateComponent />
            </ScrollAnimationExample>
          </section>
        ) : null}
      </div>
    </main>
  );
}
