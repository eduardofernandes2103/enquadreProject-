import { AuthProvider } from "./auth";
import { CartProvider } from "./cart";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
