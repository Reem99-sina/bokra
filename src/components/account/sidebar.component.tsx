"use client";

import { LinksData } from "@/utils/data.util";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";

export const Sidebar = () => {
  return (
    <div className="flex flex-1 flex-col ">
      {LinksData()?.map(({ title, children }) => (
        <div key={title} className="mb-8 flex flex-col">
          <span className="py-4 text-sm font-black text-siderBarColor ">
            {title}
          </span>

          {children.map((item) => (
            <LinkItemComponent item={item} key={item.title} />
          ))}
        </div>
      ))}
    </div>
  );
};

const LinkItemComponent = ({
  item,
}: {
  item: {
    title: string;
    icon?: FC<
      SVGProps<HTMLOrSVGElement> & {
        title?: string | undefined;
      }
    >;
    href: string;
  };
}) => {
  const pathname = usePathname();
  const isActive = pathname.split("/").pop() == item.href.split("/").pop();
  // const isActive = pathname.includes(item.href)
  const SvgIcon = item?.icon;

  return (
    <Link
      href={`/account/${item.href}`}
      className={clsx(
        "mb-2 flex w-[200px] rounded-es-lg rounded-ss-lg py-4 text-sm  items-center",
        isActive ||
          (item.href.replace("/", "") == "" &&
            pathname.split("/").pop() == "account")
          ? "border-e-8 border-black bg-transparent  font-black text-black bg-white px-4"
          : "cursor-pointer bg-transparent font-normal text-siderBarColor hover:text-[#7B8494]"
      )}
    >
      {SvgIcon ? (
        <SvgIcon
          className="me-3"
          stroke={isActive ? "#000" : "#7B8080"}
          strokeWidth={isActive ? 2 : 1}
        />
      ) : null}

      <span>{item.title}</span>
    </Link>
  );
};
