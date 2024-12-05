"use client";

import { useTranslation } from "@/translations/clients";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Modal, ModalRef } from "@/components/shared/modal.component";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { DrawerRef } from "@/components/shared/drawer.component";
import { Button } from "@/components/shared/button.component";
import { MobileMenuDrawer } from "./mobile-menu";
import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";
import { useRef, useState } from "react";

interface linksProps {
  id: number;
  text: string;
  to: string;
}
interface linksdropdownProps {
  id: number;
  text: string;
  to: string;
  dropdownItems?: linksProps[];
}
const links: linksdropdownProps[] = [
  {
    id: 1,
    text: "ABOUT US",
    to: "test/1",
  },
  {
    id: 2,
    text: "BUSINESS",
    to: "test/1",
  },
  {
    id: 3,
    text: "CAREERS",
    to: "test/1",
  },
  {
    id: 4,
    text: "BLOG",
    to: "test/1",
  },
];

export const Header = () => {
  const { lang } = useTranslation();
  // const pathname = usePathname();
  // const homeVersion = useMemo(() => pathname.endsWith(`/${lang}`), [pathname]);
  const modalRef = useRef<ModalRef>(null);
  const drawerRef = useRef<DrawerRef>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  return (
    <>
      <header>
        <div
          className={clsx(
            "flex flex-1  justify-center  overflow-x-hidden bg-mainColor   py-4  sm:w-screen sm:bg-mainColor"
          )}
        >
          <div
            className={clsx(
              "container  container-mobile flex   w-screen flex-row items-center justify-between self-center overflow-x-hidden px-3 text-sm font-bold  "
            )}
          >
            <div className="flex w-[200px]  items-center justify-between gap-28 ">
              <button
                className="block py-2 sm:hidden"
                onClick={() => {
                  drawerRef.current?.open();
                }}
              ></button>
              <Link href={`/${lang}/`}>
                <Image
                  src={"/bokralogo.png"}
                  width={200}
                  height={100}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="invisible ms-24 flex flex-row  sm:visible gap-x-8">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="flex flex-row items-center font-sans "
                >
                  {link?.dropdownItems ? (
                    <Menu>
                      <MenuHandler>
                        <div className="flex  cursor-pointer items-center gap-2 ">
                          <div
                            className={clsx(
                              "relative text-sm font-bold text-[#7B8494] hover:after:absolute hover:after:bottom-[-3px] hover:after:block hover:after:h-px hover:after:w-full hover:after:bg-primary"
                            )}
                          >
                            <div className="flex items-center justify-around">
                              <p>{link.text}</p>
                            </div>
                          </div>
                        </div>
                      </MenuHandler>
                      <MenuList
                        className="p-0"
                       
                      >
                        {link?.dropdownItems?.map((item) => (
                          <Link
                            href={item.to}
                            key={item.id}
                            className="text-xs font-bold text-[#7B8494]"
                          >
                            <MenuItem className="p-4">{item.text}</MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      href={link.to as string}
                      className={clsx(
                        "relative text-md font-bold text-white  "
                      )}
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
              <div />
            </div>
            {/* <div>
              <Linkedin/>
            </div> */}
          </div>

          <Modal ref={modalRef} size="xxl">
            <LoginForm />
          </Modal>
        </div>
      </header>

      <MobileMenuDrawer
        modalRef={modalRef}
        width={320}
        placement="right"
        ref={drawerRef}
        Footer={
          <Button
            onClick={() => {
              drawerRef.current?.close();
            }}
            text="Accessibility Icons"
          />
        }
      >
        <div className="ms-8 bg-secondary2 text-white">
          <nav className="mt-4">
            <ul className="list-disc">
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
                          {openDropdownId === link.id
                            ? "down icon"
                            : "upper icon"}
                        </div>
                        {openDropdownId === link.id && (
                          <ul className="list-disc">
                            {link?.dropdownItems?.map((item) => (
                              <li key={item.id}>
                                <Link
                                  onClick={() => drawerRef.current?.close()}
                                  href={item.to}
                                >
                                  {item.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        onClick={() => drawerRef.current?.close()}
                        href={link.to}
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                  <div className="my-3 ms-[-17px] flex h-[1px] flex-1 bg-divider" />
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </MobileMenuDrawer>
    </>
  );
};
