// import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icon";
import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FooterCopyright = () => {
  const { lang, t } = useTranslation();
  const path = usePathname();
  const social = [
    {
      title: "SUPPORT",
      linkTo: "#",
      child: [
        {
          title: t("termsAndConditions"),
          linkTo: "#",
        },
        {
          title: t("privacyPolicy"),
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
    <footer
      className={clsx(
        "bg-black  shadow  py-6 ",
        path.includes("account") ? "rounded-tr-xl" : " rounded-t-xl"
      )}
    >
      <div className=" flex flex-col items-center justify-center container mx-auto">
        <div className="text-start text-white flex  items-center gap-4  w-full">
          {/* <img src="/valoro.png" alt="Logo" className="w-12 h-12 mr-2" /> */}

          <div className="  flex justify-between w-full flex-wrap gap-5">
            {social.map(({ title, child }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex  items-start justify-start underline text-sm gap-[13px] text-grayLight">
                  {child.map((ele) => (
                    <Link key={ele?.title} href={ele.linkTo}>
                      {ele?.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <Link href={`/${lang}/`}>
                <Image
                  src={
                    lang == "ar"
                      ? "/bokra-gray-arabic.png"
                      : "/bokra-gray-eng.png"
                  }
                  width={100}
                  height={50}
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
