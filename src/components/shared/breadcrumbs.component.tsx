'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  data: { text: string; href?: string; onClick?: () => void }[];
}

export const Breadcrumbs: FC<Props> = ({ data }) => {
  return (
    <div className='flex  justify-between'>
      <div className='flex items-center  fill-secondary3 text-xs font-black sm:text-sm'>
        <Link href='/'></Link>

        {data.map((item, index) => {
          const isLastItem = index === data.length - 1;
          const isNextItemEmpty = data[index + 1]?.text === '';

          return (
            <div key={index} className='flex items-center'>
              {(isLastItem || !item.href) && !item.onClick ? (
                <p
                  className={clsx(
                    isLastItem ? 'text-black' : 'text-primeColor',
                    'text-xs',
                  )}
                >
                  {item.text}
                </p>
              ) : item.onClick && !item.href ? (
                <div
                  onClick={item.onClick}
                  className={clsx(
                    'cursor-pointer  text-xs hover:underline',
                    isLastItem ? 'text-black ' : 'text-primeColor',
                  )}
                >
                  {item.text}
                </div>
              ) : (
                <Link
                  href={item.href ? item.href : ''}
                  className={clsx(
                    'text-xs  hover:underline',
                    isLastItem ? 'text-black ' : 'text-primeColor',
                  )}
                >
                  {item.text}
                </Link>
              )}

              {!isLastItem && !isNextItemEmpty && (
                <span className={clsx('mx-5 text-xs text-primeColor')}>/</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
