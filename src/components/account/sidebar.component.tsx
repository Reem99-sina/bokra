"use client";

import { LinksData } from "@/utils/data.util";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, SVGProps } from "react";

export const Sidebar = () => {
  return (
    <div className="flex flex-1 flex-col bg-black">
      {LinksData()?.map(({ title, children }) => (
        <div key={title} className="mb-8 flex flex-col">
          <span className="py-4 text-sm font-black text-[#58595B] ">
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
  const isActive = pathname.split("/").pop() == item.href.replace("/", "");
  const SvgIcon = item?.icon;

  return (
    <Link
      href={`/account/${item.href}`}
      className={clsx(
        "mb-2 flex w-[200px] rounded-es-lg rounded-ss-lg py-4 text-sm",
        isActive||(item.href.replace("/", "")==""&&pathname.split("/").pop()=="account")
          ? "border-l-8 bg-transparent px-4 font-black text-white"
          : "cursor-pointer bg-transparent font-normal text-white hover:text-[#7B8494]"
      )}
    >
      {SvgIcon ? (
        <SvgIcon
          className="me-2"
          stroke={isActive ? "#198897" : "#7B8080"}
          strokeWidth={isActive ? 2 : 1}
        />
      ) : null}

      <span>{item.title}</span>
    </Link>
  );
};
