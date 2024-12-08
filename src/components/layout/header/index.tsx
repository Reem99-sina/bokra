'use client';

import { useTranslation } from '@/translations/clients';
import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';
import clsx from 'clsx';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { DrawerRef } from '@/components/shared/drawer.component';
import { Button } from '@/components/shared/button.component';
import { MobileMenuDrawer } from './mobile-menu';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { ProfileUser } from '@/icon';
import { useRouter } from 'next/navigation';

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
    text: 'ABOUT US',
    to: 'test/1',
  },
  {
    id: 2,
    text: 'BUSINESS',
    to: 'test/1',
  },
  {
    id: 3,
    text: 'CAREERS',
    to: 'test/1',
  },
  {
    id: 4,
    text: 'BLOG',
    to: 'test/1',
  },
];

export const Header = () => {
  const { lang, t } = useTranslation();
  const router = useRouter();
  // const pathname = usePathname();
  // const homeVersion = useMemo(() => pathname.endsWith(`/${lang}`), [pathname]);
  const drawerRef = useRef<DrawerRef>(null);
  const session = useSession();
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  return (
    <>
      <header>
        <div
          className={clsx(
            ' flex  flex-1  justify-center overflow-x-hidden   bg-mainColor  py-4 sm:w-screen',
          )}
        >
          <div
            className={clsx(
              ' flex   w-screen flex-row items-center justify-between self-center overflow-x-hidden px-3 text-sm font-bold lg:container ',
            )}
          >
            <div className='flex w-[200px]  items-center justify-between gap-28 '>
              <button
                className='block py-2 sm:hidden'
                onClick={() => {
                  drawerRef.current?.open();
                }}
              ></button>
              <Link href={`/${lang}/`}>
                <Image
                  src={'/bokralogo.png'}
                  width={100}
                  height={90}
                  alt='logo'
                />
              </Link>
            </div>
            <div className='ms-24 hidden  flex-row  gap-x-8 sm:flex'>
              {links.map((link) => (
                <div
                  key={link.id}
                  className='flex flex-row items-center font-sans '
                >
                  {link?.dropdownItems ? (
                    <Menu>
                      <MenuHandler>
                        <div className='flex  cursor-pointer items-center gap-2 '>
                          <div
                            className={clsx(
                              'hover:after:bg-primary relative text-sm font-bold text-[#7B8494] hover:after:absolute hover:after:bottom-[-3px] hover:after:block hover:after:h-px hover:after:w-full',
                            )}
                          >
                            <div className='flex items-center justify-around'>
                              <p>{link.text}</p>
                            </div>
                          </div>
                        </div>
                      </MenuHandler>
                      <MenuList className='p-0'>
                        {link?.dropdownItems?.map(item => (
                          <Link
                            href={item.to}
                            key={item.id}
                            className='text-xs font-bold text-[#7B8494]'
                          >
                            <MenuItem className='p-4'>{item.text}</MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      href={link.to as string}
                      className={clsx(
                        'relative text-md font-bold text-white  ',
                      )}
                    >
                      {link.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
           
            {session?.data?.user && (
              <div className='flex items-center gap-x-3 text-white'>
                <div>
                  <ProfileUser />
                </div>
                <p>{session?.data?.user?.name}</p>
                <Button text={t('logout')} onClick={() => signOut()}className='!w-auto' />
              </div>
            )}
            {!session?.data?.user && (
              <Button text={t('login')} onClick={() => router.push('/login')}className='!w-auto' />
            )}
             <div
              className='flex cursor-pointer sm:hidden'
              onClick={() => drawerRef.current?.open()}
            >
              <IoMenu className='' />
            </div>
          </div>

          {/* <Modal ref={modalRef} size='xxl'>
            <LoginForm />
          </Modal> */}
        </div>
      </header>

      <MobileMenuDrawer
        modalRef={drawerRef}
        width={320}
        placement='right'
        ref={drawerRef}
        Footer={
          <Link href={`/${lang}/`} className='bg-black'>
            <Image src={'/bokralogo.png'} width={100} height={90} alt='logo' />
          </Link>
        }
      >
        <div className='ms-8 bg-beige text-black'>
          <nav className='mt-4'>
            <ul className='list-disc'>
              {links.map(link => (
                <div key={link?.id}>
                  <li key={link.id}>
                    {link?.dropdownItems && link?.dropdownItems?.length > 0 ? (
                      <div>
                        <div
                          className='mb-2 flex cursor-pointer items-center gap-4'
                          onClick={() =>
                            setOpenDropdownId(
                              link.id === openDropdownId ? null : link.id,
                            )
                          }
                        >
                          <p>{link.text}</p>
                          {openDropdownId === link.id
                            ? 'down icon'
                            : 'upper icon'}
                        </div>
                        {openDropdownId === link.id && (
                          <ul className='list-disc'>
                            {link?.dropdownItems?.map(item => (
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
                  <div className='bg-divider my-3 ms-[-17px] flex h-[1px] flex-1' />
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </MobileMenuDrawer>
    </>
  );
};
