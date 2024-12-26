'use client';

import { useTranslation } from '@/translations/clients';
import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IAppProps {
  title: string;
}

const BackNavigation: React.FC<IAppProps> = ({ title }) => {
  const router = useRouter();
  const {lang}=useTranslation()
  
  return (
    <Button
      className='flex items-center px-0 !w-auto'
      variant='text'
      onClick={() => router.back()}
    >
      <div className='bg-black p-2 rounded-full text-white'>
       {lang=="ar"?<FaArrowRight/>: <FaArrowLeft />}
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
