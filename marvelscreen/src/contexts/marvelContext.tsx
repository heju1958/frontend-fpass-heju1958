import api from "../api";
import { createContext, useState } from "react";
import { IMarvel, IMarvelContext, IMarvelProps } from "../interfaces";

export const MarvelContext = createContext<IMarvelContext>(
  {} as IMarvelContext
);

export const MarvelProvider = ({ children }: IMarvelProps) => {
  const [marvel, setMarvel] = useState<IMarvel | undefined>();
  const [marvelItem, setMarvelItem] = useState<IMarvel | null>(null);
  const [marvelListData, setMarvelListData] = useState<IMarvel[] | unknown[]>(
    [] as IMarvel[]
  );


  const getMarvelData = async () => {
    return await api.get("").then((res) => {
      setMarvelListData(res.data.data.results);
    });
  };

  const getMarvel = async (input: string) => {
    return await api.get(`/${input.toLowerCase()}`).then((res) => {
      setMarvel(res.data.data.results);
    });
  };

  const getMarvelDetail = async (name: string) => {
    const res = await api.get(`/${name}`);
    setMarvelItem(res.data.data.results);
  };

  // pagination

  const [offset, setOffset] = useState(0);

  const previousPage = async () => {
    if (offset > 0) {
      const res = await api.get("", {
        params: {
          offset: offset - 6,
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
      },
    });
    setMarvelListData(res.data.data.results);
    setOffset(offset + 6);
  };

  return (
    <MarvelContext.Provider
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
    </MarvelContext.Provider>
  );
};
