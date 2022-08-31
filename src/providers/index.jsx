import { AntProvider } from "./AntProvider";
import { QueryProvider } from "./QueryProvider";

export const Providers = ({ children }) => {
  return (
    <AntProvider>
      <QueryProvider>{children}</QueryProvider>
    </AntProvider>
  );
};
