import { CartProvider } from './cart'
import { AuthProvider } from './auth'
import { ProductsProvider } from './products'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
