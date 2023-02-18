import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: '',
  });

  const setUserAuthInfo = (data) => {
    console.log(data);
    const token = sessionStorage.setItem('token', data);
    setAuthState({
      token,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => sessionStorage?.getItem('token');

  return (
    <Provider
      value={{
        token: authState,
        setToken: (token) => setUserAuthInfo(token),
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const publicRoutes = ['/login/', '/signup/'];
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isUserAuthenticated();

  if (!isLoggedIn && !publicRoutes.includes(router.asPath)) {
    router.push('/login/');
  }

  return children;
};

export { AuthContext, ProtectedRoute, AuthProvider };
