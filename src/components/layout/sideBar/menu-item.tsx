"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export const LinkItemComponent = ({
  item,
}: {
  item: {
    title: string;
    icon?: ReactElement;
    href: string;
  };
}) => {
  const pathname = usePathname();

  const isActive = pathname.includes(item.href);

  return (
    <Link
      href={item.href}
      className={clsx(
        "mb-2 flex w-[264px] items-center gap-x-4 rounded-es-lg rounded-ss-lg py-4 text-sm",
        isActive
          ? "border-l-8 bg-white px-4 font-black text-[#153E7E]"
          : "cursor-pointer bg-transparent font-normal text-[#7B8080] hover:text-[#7B8494]"
      )}
    >
      {/* {SvgIcon ? (
        <SvgIcon
          stroke={isActive ? "#2B60DE	" : "#7B8080"}
          strokeWidth={isActive ? 2 : 1}
        />
      ) : null} */}

      <span className="mt-1">{item.title}</span>
    </Link>
  );
};
