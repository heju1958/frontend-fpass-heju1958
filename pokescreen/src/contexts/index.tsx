import { ReactNode } from "react";
import { MarvelProvider } from "./marvelContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <MarvelProvider>{children}</MarvelProvider>;
};
