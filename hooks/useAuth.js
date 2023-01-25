import { authTokenState } from '@atoms/AuthAtom';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

function useAuth() {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const publicRoutes = ['/login', '/signup'];

  return {
    authToken,
    setAuthToken,
    loading,
    publicRoutes,
  };
}

export default useAuth;
