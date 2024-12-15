'use client';

import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface IAppProps {
  title: string;
}

const BackNavigation: React.FC<IAppProps> = ({ title }) => {
  const router = useRouter();

  return (
    <Button
      className='flex items-center ps-0 !w-auto'
      variant='text'
      onClick={() => router.back()}
    >
      <div>
        <FaArrowLeft />
      </div>
      <Typography
        className='ms-3 text-right text-base font-bold text-[#58595B] sm:block hidden'
        variant='paragraph'
      >
        {title}
      </Typography>
    </Button>
  );
};

export default BackNavigation;
