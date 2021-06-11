import { AuthProvider } from "./AuthProvider";
import { ActiviesProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ActiviesProvider>{children}</ActiviesProvider>
    </AuthProvider>
  );
};

export default Providers;
