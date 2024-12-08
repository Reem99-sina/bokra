import React, { RefObject, forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Drawer, DrawerRef } from '@/components/shared/drawer.component';
import { Line } from '@/components/shared/line.component';
import Link from 'next/link';
import { useTranslation } from '@/translations/clients';
import { useUser } from '@/hooks/user.hooks';
import { LuEarth } from 'react-icons/lu';
import { IoIosSettings } from 'react-icons/io';
import { useAuth } from '@/hooks/auth.hook';
import { ModalRef } from '@/components/shared/modal.component';
import { signOut, useSession } from 'next-auth/react';
import { FaUser } from 'react-icons/fa';

interface Props {
  title?: string;
  children: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
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
      placement = 'left',
      width = 300,
      Footer,
      TopLeftComponent,
    },
    ref,
  ) => {
    const { logout } = useAuth();
    const session = useSession();
    const { user } = useUser();
    const { lang, t, changeLanguage } = useTranslation();
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
      <Drawer ref={ref} width={width} placement={placement}>
        <div className=' h-screen w-full   bg-beige '>
          <div className='flex justify-between justify-items-start py-4 pe-3 ps-4 text-black'>
            <Link href={`/${lang}/`}>{lang}</Link>
            <div className='flex cursor-pointer flex-col gap-4'>
              <div
                className='cursor-pointer'
                onClick={() => modalRef.current?.close()}
              >
                {TopLeftComponent ? TopLeftComponent : 'X'}
              </div>
              <div>
                <div
                  className='flex  cursor-pointer items-center gap-2 rounded-none '
                  onClick={() => changeLanguage(lang == 'en' ? 'ar' : 'en')}
                >
                  <LuEarth />
                </div>
              </div>
            </div>
          </div>

          <Line />

          {user || session ? (
            <div className='flex flex-1 flex-col bg-beige '>
              <div className='ms-4 flex items-center'>
                <div>
                  <div
                    className='  flex cursor-pointer items-center gap-2'
                    onClick={toggleProfileMenu}
                  >
                    <div className='flex items-center'>
                      <p
                        className={clsx(
                          'ml-4 mr-4 cursor-pointer text-xs text-black',
                        )}
                      >
                        {user?.username || session?.data?.user?.name}
                      </p>
                    </div>
                  </div>

                  {isProfileMenuOpen && (
                    <div className='mt-4 w-56 rounded bg-[#F4F6F9] p-4 text-gray-500 shadow-none'>
                      <Link
                        href='/account/profile'
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className='rounded-none'>
                          <div className='relative flex flex-col items-start '>
                            image
                            <p className={'mt-4 text-sm font-bold '}>
                              {user?.username || session?.data?.user?.name}
                            </p>
                            <p>{user?.email || session?.data?.user?.email}</p>
                          </div>
                        </div>
                      </Link>

                      <div
                        className='rounded-none'
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className='my-2 flex flex-row items-center  gap-x-3  rounded-none text-sm text-[#7B8494]'>
                          <IoIosSettings />
                          <p className={'text-sm font-bold '}>{t('setting')}</p>
                        </div>
                      </div>
                      <Link
                        href='/account/profile'
                        className=' text-xs font-bold text-[#7B8494]'
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className='flex items-center gap-x-3 rounded-none  text-sm  text-[#7B8494]'>
                          <FaUser />
                          <p className={' text-sm font-bold '}>
                            {t('profile')}
                          </p>
                        </div>
                      </Link>

                      <Link
                        href='/account/profile'
                        className='font-bold'
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className='my-2 flex flex-row rounded-none  text-sm  text-[#7B8494]'></div>
                      </Link>

                      <Link
                        href='/'
                        onClick={() => {logout();signOut()}}
                        className='font-bold'
                      >
                        <div className='mt-[15px] flex flex-row rounded bg-[#7B8494] p-2 text-black'>
                          logout
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>{' '}
            </div>
          ) : (
            <div className='mt-6 flex items-center'>
              <button
                onClick={() => {
                  modalRef.current?.open();
                }}
                className='bg-primary relative ms-6  flex h-10 w-32 flex-row rounded px-4 py-1 text-sm'
              >
                <span className=' absolute  top-2 mr-1 flex text-black'>
                  {t('login')}
                </span>
              </button>
            </div>
          )}
          <div className=' mb-4  ms-8 bg-beige text-black'>{children}</div>

          <Line />

          <div className='  bg-black p-6 '>{Footer && Footer}</div>
        </div>
      </Drawer>
    );
  },
);

