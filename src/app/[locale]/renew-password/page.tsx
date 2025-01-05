
import RenewPasswordForm from '@/components/auth/renew-password';
import React from 'react';

const RenewPassword = () => {
  return (
    <div className='flex h-screen flex-1 items-center justify-center bg-beige '>
      <div>
        <RenewPasswordForm />
      </div>
    </div>
  );
};

export default RenewPassword;
