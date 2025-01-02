import React, { forwardRef } from 'react';
import { Drawer, DrawerRef } from './drawer.component';
import { Line } from './line.component';
import { Button } from './button.component';
import { MdClose } from 'react-icons/md';
import clsx from 'clsx';
import { useTranslation } from '@/translations/clients';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  width?: number;
  Footer?: React.ReactNode;
  submitButtonOptions?: {
    text: string;
    onClick: () => void;
  };
  TopLeftComponent?: React.ReactNode;
}

export const FormDrawer = forwardRef<DrawerRef, Props>(
  (
    {
      title,
      className,
      children,
      submitButtonOptions,
      placement = 'left',
      width = 400,
      Footer,
      TopLeftComponent,
    },
    ref,
  ) => {
    const {t}=useTranslation()
    
    return (
      <Drawer ref={ref} width={width} placement={placement}>
        <div className='flex h-screen w-full flex-col justify-between'>
          <div>
            <div className='flex justify-between py-4 pe-4 ps-12 sm:p-6'>
              <span className='text-sm font-bold text-black'>{title}</span>

              {TopLeftComponent ? (
                TopLeftComponent
              ) : (
                <MdClose
                  className='cursor-pointer'
                  color='black'
                  onClick={() => {
                    (
                      ref as React.MutableRefObject<DrawerRef> | null
                    )?.current?.close();
                  }}
                />
              )}
            </div>

            <Line />
          </div>

          <div className='scrollbar-hide flex flex-1 flex-col overflow-y-scroll'>
            {children}
          </div>

          <div>
            <Line />

            <div className='py-3 pe-2 ps-12 sm:p-6'>
              {Footer ? (
                Footer
              ) : (
                <div className='flex w-full'>
                  {submitButtonOptions ? (
                    <Button
                      text={submitButtonOptions.text}
                      className={`rounded-sm ${className}`}
                      onClick={submitButtonOptions.onClick}
                    />
                  ) : null}

                  <Button
                    onClick={() =>
                      (
                        ref as React.MutableRefObject<DrawerRef> | null
                      )?.current?.close()
                    }
                    text={t("cancellation")}
                    className={clsx(
                      '!border-divider flex-1 rounded-sm border  !bg-[unset] shadow-lg',
                      'hover:!bg-secondary1 !text-black hover:!bg-opacity-20',
                      'ms-4  !w-32',
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    );
  },
);
