import { AxiosHeaders } from "axios";
import { ReactNode, SetStateAction } from "react";

export interface IPokemonContext {
  marvel: IPoke | undefined;
  marvelItem: IPoke;
  marvelListData: IPoke[] | unknown[];
  nextPage: () => void;
  previousPage: () => void;
  getMarvel: (input: string) => void;
  getMarvelData: () => void;
  setMarvelItem: React.Dispatch<SetStateAction<IPoke>>;
  getMarvelDetail: (name: string) => Promise<void>;
}

export interface IPokemonProps {
  children: ReactNode;
}

export interface IPoke {
  id: number;
  name: string;
  next: string;
  previous: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface IRes {
  data: IPoke;
}

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  slot: number;
  is_hidden: boolean;
}

export interface IEndpoint {
  name: string;
  url: string;
}

export interface IObj {
  data: {};
  status: number;
  statusText: string;
  headers: AxiosHeaders;
  config: {};
  request: XMLHttpRequest;
}
