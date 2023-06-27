import { ReactNode, SetStateAction } from "react";

export interface IMarvelContext {
  marvel: IMarvel | undefined;
  marvelItem: IMarvel | null;
  marvelListData: IMarvel[] | unknown[];
  nextPage: () => void;
  previousPage: () => void;
  getMarvel: (input: string) => void;
  getMarvelData: () => void;
  setMarvelItem: React.Dispatch<SetStateAction<IMarvel | null>>;
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
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
}

export interface IRes {
  data: IMarvel;
}
