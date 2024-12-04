'use client';

import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import ReactModernDrawer from 'react-modern-drawer';
import clsx from 'clsx';
import 'react-modern-drawer/dist/index.css';

export interface DrawerRef {
  open: () => void;
  close: () => void;
}

interface Props {
  children: React.ReactNode;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  width?: number;
}

export const Drawer = forwardRef<DrawerRef, Props>(
  ({ children, placement = 'left', className, width }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    useImperativeHandle(ref, () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }));

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isVisible]);

    return (
      <ReactModernDrawer
        open={isVisible}
        onClose={() => setIsVisible(false)}
        className={clsx('flex flex-1 flex-col ')}
        direction={placement}
        size={width}
        lockBackgroundScroll
      >
        <div className={clsx('flex flex-1', className)}>
          {isVisible ? children : null}
        </div>
      </ReactModernDrawer>
    );
  },
);
