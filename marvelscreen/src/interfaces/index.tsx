import { ReactNode, SetStateAction } from "react";

export interface IMarvelContext {
  heroData: IMarvel[] | unknown[];
  marvelItem: IMarvel | null;
  nextPage: () => void;
  previousPage: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getMarvelData: () => void;
  getMarvelDetail: (name: string) => Promise<void>;
  setMarvelItem: React.Dispatch<SetStateAction<IMarvel | null>>;
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
