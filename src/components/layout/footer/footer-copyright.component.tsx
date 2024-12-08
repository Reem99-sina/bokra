// import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icon";
import { useTranslation } from "@/translations/clients";
import Image from "next/image";
import Link from "next/link";

export const FooterCopyright = () => {
  const {lang}=useTranslation()
  const social = [
    {
      title: "SUPPORT",
      linkTo: "#",
      child: [
        {
          title: "Terms and Conditions",
          linkTo: "#",
        },
        {
          title: "Privacy Policy",
          linkTo: "#",
        },
      ],
    },
    {
      title: "CONTACT",
      child: [
        {
          title: "info@bokra.com",
          linkTo: "#",
        },
      ],
    },
  ];
  
  return (
    <footer className=" bg-black  shadow container mx-auto">
      <div className=" flex flex-col items-center justify-center ">
        <div className="text-start text-white flex  items-center gap-4  w-full">
          {/* <img src="/valoro.png" alt="Logo" className="w-12 h-12 mr-2" /> */}

          <div className="py-5  flex justify-evenly w-full">
            {social.map(({ title, child }) => (
              <div key={title}>
                <p className="mb-[13px] text-md">{title}</p>
                <div className="flex flex-col items-start justify-start underline text-sm gap-y-[13px] text-grayLight">
                {child.map((ele) => (
                  <Link key={ele?.title} href={ele.linkTo} >
                    {ele?.title}
                  </Link>
                ))}
                </div>
              </div>
            ))}
            <div>
            <Link href={`/${lang}/`}>
                <Image
                  src={"/bokralogo.png"}
                  width={200}
                  height={100}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
