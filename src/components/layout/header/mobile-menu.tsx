import React, { RefObject, forwardRef } from "react";
import { Drawer, DrawerRef } from "@/components/shared/drawer.component";
import { Line } from "@/components/shared/line.component";
import { useTranslation } from "@/translations/clients";
import { useUser } from "@/hooks/user.hooks";
import { ModalRef } from "@/components/shared/modal.component";

interface Props {
  title?: string;
  children: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  width?: number;
  Footer?: React.ReactNode;
  submitButtonOptions?: {
    text: string;
    onClick: () => void;
  };
  TopLeftComponent?: React.ReactNode;
  modalRef: RefObject<ModalRef>;
}

export const MobileMenuDrawer = forwardRef<DrawerRef, Props>(
  (
    {
      modalRef,
      children,
      placement = "left",
      width = 300,
      Footer,
      TopLeftComponent,
    },
    ref
  ) => {
    const { user } = useUser();
    const { t } = useTranslation();

    return (
      <Drawer ref={ref} width={width} placement={placement}>
        <div className=" h-screen w-full   bg-beige flex flex-col">
          <div className="flex justify-between justify-items-start py-4 pe-3 ps-4 text-black w-full">
            <div className="flex cursor-pointer flex-col gap-4 w-full">
              <div
                className="cursor-pointer w-full"
                onClick={() => modalRef.current?.close()}
              >
                {TopLeftComponent ? TopLeftComponent : "X"}
              </div>
            </div>
          </div>

          <Line />

          {user ? (
            <></>
          ) : (
            <div className="mt-6 flex items-center">
              <button
                onClick={() => {
                  modalRef.current?.open();
                }}
                className="bg-primary relative ms-6  flex h-10 w-32 flex-row rounded px-4 py-1 text-sm"
              >
                <span className=" absolute  top-2 mr-1 flex text-black">
                  {t("login")}
                </span>
              </button>
            </div>
          )}
          <div className=" mb-4  ms-8 bg-beige text-black">{children}</div>

          <Line />

          <div className=" mt-auto">{Footer && Footer}</div>
        </div>
      </Drawer>
    );
  }
);
