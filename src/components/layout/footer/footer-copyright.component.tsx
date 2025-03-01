import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const FooterCopyright = () => {
  const { lang, t } = useTranslation();
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
    <footer className={clsx("bg-black  shadow  py-6 ")}>
      <div className=" flex flex-col items-center justify-center container mx-auto">
        <div className="text-start text-white flex  items-center gap-4  w-full">
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
