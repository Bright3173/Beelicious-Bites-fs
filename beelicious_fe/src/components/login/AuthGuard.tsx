'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';

type User = {
  id: string;
  email?: string;
  name?: string;
  phoneNumber?: string;
};

const authGuard = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function GuardedComponent(props: P) {
    const user: User | null = useSelector(
      (state: RootState) => state.login?.user
    );
    const router = useRouter();
    useEffect(() => {
      if (!user) {
        router.push('/');
      }
    }, [user, router]);
    if (!user) return null;
    return <WrappedComponent {...props} />;
  };
};

export default authGuard;
