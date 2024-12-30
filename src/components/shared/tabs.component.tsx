'use client';
import clsx from 'clsx';
import React, { FC, useState } from 'react';

interface Props {
  tabs: {
    title: string;
    Component?: JSX.Element;
    onClick?: () => void;
  }[];
  activeIndex?: number;
}

export const Tabs: FC<Props> = ({ tabs, activeIndex }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    activeIndex ? activeIndex : 0,
  );

  return (
    <div>
      <div className='mb-4 flex border-b border-[rgba(0,0,0,0.3)]'>
        {tabs.map((tab, index) => {
          const textColorClass =
            index === activeTabIndex
              ? 'text-black font-black'
              : 'text-[rgba(0,0,0,0.3)] font-normal';

          return (
            <div
              className={clsx(
                'flex cursor-pointer px-4  py-5 ml-6 ',
                index === activeTabIndex ? 'border-b-4 border-black' : '',
              )}
              key={tab.title}
              onClick={() => {
                setActiveTabIndex(index);
                if (tab?.onClick) {
                  tab.onClick();
                }
              }}
            >
              <div className={clsx(` self-start rounded-tr-lg `)}>
                <h3
                  className={`text-xs  font-bold sm:text-base ${textColorClass}`}
                >
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
