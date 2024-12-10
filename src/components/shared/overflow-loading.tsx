import React from 'react';
import { Spinner } from './spinner.component';

export const OverflowLoading = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-40 flex items-center justify-center bg-black bg-opacity-50'>
      <Spinner />
    </div>
  );
};
