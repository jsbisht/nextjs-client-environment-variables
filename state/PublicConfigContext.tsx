import { createContext, PropsWithChildren } from "react";

type PublicConfigProviderProps = PropsWithChildren & {
  value: Record<string, any>;
};

export const PublicConfigContext = createContext({});

export const PublicConfigProvider = ({
  children,
  value,
}: PublicConfigProviderProps) => {
  return (
    <PublicConfigContext.Provider value={value}>
      {children}
    </PublicConfigContext.Provider>
  );
};
