"use client";

import { useTranslation } from "@/translations/clients";
import Link from "next/link";
import clsx from "clsx";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { DrawerRef } from "@/components/shared/drawer.component";
import { Button } from "@/components/shared/button.component";
import { MobileMenuDrawer } from "./mobile-menu";
import Image from "next/image";
import { ReactNode, useMemo, useRef, useState } from "react";
import { ProfileUser } from "@/icon";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/user.hooks";
import { useAuth } from "@/hooks/auth.hook";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IUser } from "@/types/user.type";
import { IoIosLogOut } from "react-icons/io";
import { MdAutorenew } from "react-icons/md";
import Language from "@/components/shared/language";
import { RiSecurePaymentLine } from "react-icons/ri";

interface linksProps {
  id: number;
  text: string;
  to: string;
  onClick?: () => void;
  icon?: ReactNode;
}
interface linksdropdownProps {
  id: number;
  text?: string;
  to?: string;
  dropdownItems?: linksProps[];
}

export const Header = () => {
  const { logout } = useAuth();
  const { lang, t } = useTranslation();
  const router = useRouter();
  const { user, updateUser } = useUser();
  // const pathname = usePathname();
  // const homeVersion = useMemo(() => pathname.endsWith(`/${lang}`), [pathname]);
  const drawerRef = useRef<DrawerRef>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const links: linksdropdownProps[] = useMemo(() => {
    return [
      {
        id: 1,
        text: t("home"),
        to: "/",
      },
      {
        id: 2,
        text: t("about_us"),
        to: "/#about",
      },
      {
        id: 3,
        text: t("our_solutions"),
        to: "/#type",
      },

      {
        id: 5,
        text: t("contact_us"),
        to: "/#contact",
      },
      {
        id: 6,
        text: (user as IUser)?.username || user?.email?.split("@")[0],
        icon: <ProfileUser />,
        dropdownItems: [
          {
            id: 1,
            text: t("profile"),
            icon: <FaUser />,
            to: "/account",
          },
          {
            id: 2,
            text: t("personalLoan"),
            icon: <GiTakeMyMoney />,
            to: "/account/personal-loan",
          },
          {
            id: 3,
            text: t("financialTransactions"),
            icon: <FaMoneyBillTransfer />,
            to: "/account/financial-transaction",
          },
          {
            id: 4,
            text: t("loanRepayment"),
            icon: <RiSecurePaymentLine />,
            to: "/account/repayment",
          },
          {
            id: 5,
            text: t("loanRenewal"),
            icon: <MdAutorenew />,
            to: "/account/renewal",
          },
          {
            id: 6,
            text: t("logout"),
            icon: <CiLogout />,
            to: "/login",
            onClick: () => {
              logout();
              updateUser({ email: "", password: "" });
            },
          },
        ],
      },
    ];
  }, [user]);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 z-10   will-change-transform  bg-black ",
          lang == "ar" ? "left-4 right-0" : "left-0 right-4"
        )}
      >
        <div
          className={clsx(
            "flex  flex-1  justify-center overflow-x-hidden   bg-mainColor  py-7 sm:w-screen "
          )}
        >
          <div
            className={clsx(
              " flex   w-screen flex-row items-center justify-between self-center overflow-x-hidden px-3 text-sm font-bold lg:container "
            )}
          >
            <div className="flex w-[200px]  items-center justify-start gap-28 ">
              <Link href={`/${lang}/`}>
                <Image
                  src={
                    lang == "ar"
                      ? "/bokra-gray-arabic.png"
                      : "/bokra-gray-eng.png"
                  }
                  width={100}
                  height={90}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="ms-24 hidden  flex-row  gap-x-8 sm:flex">
              {links.map((link) => (
                <div key={link.id} className="flex flex-row items-center">
                  {link?.dropdownItems ? (
                    <Menu>
                      <MenuHandler>
                        <div className="flex items-center gap-x-3 text-white cursor-pointer">
                          <div>{link?.text && <FaUserCircle />}</div>
                          <p>{link?.text}</p>
                        </div>
                      </MenuHandler>
                      <MenuList className="p-0 focus:outline-none z-10">
                        {link?.dropdownItems?.map((item) => (
                          <Link
                            href={item.to}
                            key={item.id}
                            onClick={item?.onClick}
                            className="text-xs font-bold text-[#7B8494] focus-visible:outline-none"
                          >
                            <MenuItem className="p-4 ">
                              <div className="flex items-center gap-x-4">
                                {item?.icon}
                                <p className="text-black hover:underline">
                                  {" "}
                                  {item.text}
                                </p>
                              </div>
                            </MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      href={link.to as string}
                      className={clsx(
                        "relative text-sm  text-white  ",
                        "transition-all duration-300",
                        "scroll-smooth"
                      )}
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
              {!user?.email && (
                <Button
                  text={t("login")}
                  onClick={() => router.push("/login")}
                  className="!w-auto !bg-white !p-3 !text-xs !text-black"
                />
              )}
              <div className="flex items-center gap-4">
                <Language />

                {user?.email && (
                  <>
                    <div className="w-[1px] h-full bg-grayLight" />
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        logout();
                        updateUser({ email: "", password: "" });
                      }}
                    >
                      <IoIosLogOut color="white" className="text-xl" />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div
              className="flex cursor-pointer sm:hidden"
              onClick={() => drawerRef.current?.open()}
            >
              <IoMenu className="" color={"white"} />
            </div>
          </div>

          {/* <Modal ref={modalRef} size='xxl'>
            <LoginForm />
          </Modal> */}
        </div>
      </div>

      <MobileMenuDrawer
        modalRef={drawerRef}
        width={320}
        placement="right"
        ref={drawerRef}
        Footer={
          <div className="bg-black p-6">
            <Link href={`/${lang}/`}>
              <Image
                src={
                  lang == "ar"
                    ? "/bokra-gray-arabic.png"
                    : "/bokra-gray-eng.png"
                }
                width={100}
                height={90}
                alt="logo"
              />
            </Link>
          </div>
        }
        TopLeftComponent={<IoClose />}
      >
        <div className="ms-8 bg-beige text-black">
          <nav className="mt-4">
            <ul className="list-none">
              {links.map((link) => (
                <div key={link?.id}>
                  <li key={link.id}>
                    {link?.dropdownItems && link?.dropdownItems?.length > 0 ? (
                      <div>
                        <div
                          className="mb-2 flex cursor-pointer items-center gap-4"
                          onClick={() =>
                            setOpenDropdownId(
                              link.id === openDropdownId ? null : link.id
                            )
                          }
                        >
                          <p>{link.text}</p>
                          {openDropdownId === link.id ? (
                            <FaChevronDown />
                          ) : (
                            <FaChevronUp />
                          )}
                        </div>
                        {openDropdownId === link.id && (
                          <ul className="list-none">
                            {link?.dropdownItems?.map((item) => (
                              <li
                                key={item.id}
                                className="flex flex-col gap-y-4"
                              >
                                <Link
                                  onClick={() => drawerRef.current?.close()}
                                  href={item.to}
                                >
                                  <div className="flex items-center gap-x-4">
                                    {item?.icon}
                                    <p className="text-black"> {item.text}</p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        onClick={() => drawerRef.current?.close()}
                        href={link?.to ?? ""}
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                  <div className="bg-divider my-3 ms-[-17px] flex h-[1px] flex-1" />
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </MobileMenuDrawer>
    </>
  );
};
