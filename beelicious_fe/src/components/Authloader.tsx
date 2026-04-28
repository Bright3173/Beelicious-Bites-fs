'use client';

import { useEffect } from 'react';
import api from '@/lib/api';
import { useDispatch } from 'react-redux';
import { login, logout } from '@/store/reducer/loginSlice';

const AuthLoader = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get('/users/me');
        dispatch(login(res.data));
      } catch (error) {
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLoader;
