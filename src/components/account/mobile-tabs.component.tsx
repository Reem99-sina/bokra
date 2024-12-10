import React, { FC, SVGProps, useState, useRef } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinksData } from "@/utils/data.util";

export const MobileTabs: FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    if (containerRef.current) {
      const tabWidth = containerRef.current.children[0].clientWidth;
      containerRef.current.scrollTo({
        left: index * tabWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto whitespace-nowrap border-b border-[rgba(0,0,0,0.3)]"
      >
        {LinksData()?.map((tab, index) => {
          const textColorClass =
            index === activeTabIndex ? "text-white" : "text-[rgba(0,0,0,0.3)]";

          return (
            <div
              className={clsx("flex cursor-pointer")}
              key={tab.title}
              onClick={() => handleTabClick(index)}
            >
              <div className={clsx(`h-[50px] self-start rounded-tr-lg  p-3`)}>
                <h3 className={`text-base font-bold ${textColorClass}`}>
                  {tab.title}
                </h3>
              </div>
              {tab.children.map((item) => (
                <LinkItemComponent item={item} key={item.title} />
              ))}
            </div>
          );
        })}
      </div>
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

  const isActive = pathname.includes(item.href);

  const SvgIcon = item?.icon;

  return (
    <Link
      href={`/account/${item.href}`}
      className={clsx(
        "mx-2 flex w-fit  rounded-ss-lg py-4 text-sm",
        isActive
          ? "border-b-4 border-[#707070] px-4 font-black text-white"
          : "cursor-pointer bg-transparent font-normal text-[#7B8080] hover:text-[#7B8494]"
      )}
    >
      {SvgIcon ? (
        <SvgIcon
          className="me-2"
          stroke={isActive ? "#ffff" : "#7B8080"}
          strokeWidth={isActive ? 2 : 1}
        />
      ) : null}

      <span>{item.title}</span>
    </Link>
  );
};
