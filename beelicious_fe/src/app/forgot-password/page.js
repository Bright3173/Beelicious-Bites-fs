'use client';
import React from 'react';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import ForgotPasswordPage from '@/components/login/ForgotPassword';

const page = () => {
  return (
    <>
      <Breadcrumb title={'Forgot Password'} />
      <ForgotPasswordPage />
    </>
  );
};

export default page;
