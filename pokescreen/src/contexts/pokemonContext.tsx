import api from "../api";

import { createContext, useState } from "react";

import { IPoke, IPokemonContext, IPokemonProps } from "../interfaces";
export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);

export const PokemonProvider = ({ children }: IPokemonProps) => {
  const [marvel, setMarvel] = useState<IPoke | undefined>();
  const [marvelItem, setMarvelItem] = useState<IPoke>({} as IPoke);
  const [marvelListData, setPokeListData] = useState<IPoke[] | unknown[]>(
    [] as IPoke[]
  );

  // marvel heros

  const getMarvelData = async () => {
    return await api.get("").then((res) => {
      setPokeListData(res.data.data.results);
    });
  };

  const getMarvel = async (input: string) => {
    return await api.get(`/${input.toLowerCase()}`).then((res) => {
      setMarvel(res.data.data.results);
    });
  };

  const getMarvelDetail = async (name: string) => {
    return await api.get(`/${name}`).then((res) => {
      setMarvelItem(res.data.data.results);
    });
  };

  // pagination

  const [offset, setOffset] = useState(0);

  const previousPage = async () => {
    if (offset > 0) {
      const res = await api.get("", {
        params: {
          offset: offset,
        },
      });
      setPokeListData(res.data.data.results);
      setOffset(offset - 6);
    }
  };

  const nextPage = async () => {
    const res = await api.get("", {
      params: {
        offset: offset,
      },
    });
    setPokeListData(res.data.data.results);
    setOffset(offset + 6);
  };

  return (
    <PokemonContext.Provider
      value={{
        marvel,
        marvelItem,
        marvelListData,
        getMarvel,
        setMarvelItem,
        getMarvelData,
        getMarvelDetail,
        nextPage,
        previousPage,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
