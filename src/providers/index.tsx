import { CartProvider } from './cart'
import { AuthProvider } from './auth'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
