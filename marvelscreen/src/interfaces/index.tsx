import { ReactNode, SetStateAction } from "react";

export interface IMarvelContext {
  marvel: IMarvel | undefined;
  marvelItem: IMarvel;
  marvelListData: IMarvel[] | unknown[];
  nextPage: () => void;
  previousPage: () => void;
  getMarvel: (input: string) => void;
  getMarvelData: () => void;
  setMarvelItem: React.Dispatch<SetStateAction<IMarvel>>;
  getMarvelDetail: (name: string) => Promise<void>;
}

export interface IMarvelProps {
  children: ReactNode;
}

export interface IMarvel {
  id: number;
  name: string;
  previous: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface IRes {
  data: IMarvel;
}
