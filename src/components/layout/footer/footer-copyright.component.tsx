// import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icon";
import Link from "next/link";

export const FooterCopyright = () => {
  const social = [
    {
      Svg: <></>,
      alt: "instagram",
      linkTo: "#",
    },
    {
      Svg: <></>,
      alt: "twitter",
      linkTo: "#",
    },
    {
      Svg: <></>,
      alt: "facebook",
      linkTo: "#",
    },
  ];
  return (
    <footer className="dark:bg-bg-dark  border-t-2 border-[#264E65] bg-[#1A3B4E]  shadow">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <div className="text-center text-white flex  items-center gap-4 ">
          {/* <img src="/valoro.png" alt="Logo" className="w-12 h-12 mr-2" /> */}

          <div className="my-4 -ms-2 flex gap-2">
            {social.map(({  alt, linkTo }) => (
              <Link key={alt} href={linkTo}>
                {/* <Svg className="h-5 w-7" /> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
