'use client';
import clsx from 'clsx';
import React, { FC, useState } from 'react';

interface Props {
  tabs: {
    title: string;
    Component: JSX.Element;
  }[];
  onTabChange?: (index: number) => void;
}

export const AccountTabs: FC<Props> = ({ tabs, onTabChange }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className='flex flex-1 flex-col'>
      <div className='mb-4 flex rounded border border-secondary1  text-center'>
        {tabs.map((tab, index) => {
          const bgColorClass =
            index === activeTabIndex
              ? 'bg-secondary1'
              : 'bg-white  border  border-secondary1';
          const textColorClass =
            index === activeTabIndex ? 'text-white' : 'text-secondary1';

          return (
            <div
              className='flex w-3/6 cursor-pointer  '
              key={tab.title}
              onClick={() => {
                setActiveTabIndex(index);
                onTabChange && onTabChange(index);
              }}
            >
              <div
                className={clsx(
                  `h-[40px] w-full  ${bgColorClass}  pt-0 sm:py-2`,
                )}
              >
                <h3 className={`text-sm font-bold ${textColorClass}`}>
                  {tab.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {tabs[activeTabIndex].Component}
    </div>
  );
};
