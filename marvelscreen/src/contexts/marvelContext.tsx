import api from "../api";
import { createContext, useState, useEffect } from "react";
import { IMarvel, IMarvelContext, IMarvelProps } from "../interfaces";

export const MarvelContext = createContext<IMarvelContext>(
  {} as IMarvelContext
);

export const MarvelProvider = ({ children }: IMarvelProps) => {
  const [marvelItem, setMarvelItem] = useState<IMarvel | null>(null);
  const [marvelListData, setMarvelListData] = useState<IMarvel[] | unknown[]>(
    [] as IMarvel[]
  );
  const [search, setSearch] = useState<string>("");
  const [queryParams, setQueryParams] = useState({});

  const getMarvelFilter = async (input: string) => {
    await api
      .get("", {
        params: {
          nameStartsWith: input.toLocaleLowerCase(),
          limit: 6,
        },
      })
      .then((res) => {
        setMarvelListData(res.data.data.results);
        setQueryParams(res.config.params);
      });
  };

  const getMarvelDetail = async (name: string) => {
    await api
      .get("", {
        params: {
          name: name,
        },
      })
      .then((res) => {
        setMarvelItem(res.data.data.results);
        setQueryParams(res.config.params);
      });
  };

  const getMarvelData = async () => {
    await api
      .get("", {
        params: {
          limit: 6,
        },
      })
      .then((res) => {
        setMarvelListData(res.data.data.results);
        setQueryParams(res.config.params);
      });
  };

  // pagination

  const [offset, setOffset] = useState(0);

  const previousPage = async () => {
    if (offset > 0) {
      const res = await api.get("", {
        params: {
          offset: offset - 6,
          ...queryParams,
        },
      });
      setMarvelListData(res.data.data.results);
      setOffset(offset - 6);
    }
  };

  const nextPage = async () => {
    const res = await api.get("", {
      params: {
        offset: offset + 6,
        ...queryParams,
      },
    });
    setMarvelListData(res.data.data.results);
    setOffset(offset + 6);
  };

  return (
    <MarvelContext.Provider
      value={{
        marvelListData,
        search,
        marvelItem,
        setMarvelItem,
        getMarvelFilter,
        getMarvelDetail,
        nextPage,
        previousPage,
        setSearch,
        getMarvelData,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

// tentar nao salvar no localstorage
// corrigir deploy

// Interessados enviar currículo + desafio para: eduardo@fpass.com.br e edy.rodrigues@fpass.com.br com o titulo
// "Vaga de desenvolvimento front-end React Pleno ou Sênior
