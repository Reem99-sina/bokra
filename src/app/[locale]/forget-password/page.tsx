import ForgetPasswordForm from '@/components/auth/forget-password';
import React from 'react';

const ForgetPassword = () => {
  return (
    <div className='flex h-screen flex-1 items-center justify-center bg-beige '>
      <div>
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPassword;
