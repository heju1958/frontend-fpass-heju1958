import api from "../api";
import { createContext, useState, useEffect } from "react";
import { IMarvel, IMarvelContext, IMarvelProps } from "../interfaces";
import { useParams } from "react-router-dom";

export const MarvelContext = createContext<IMarvelContext>(
  {} as IMarvelContext
);

export const MarvelProvider = ({ children }: IMarvelProps) => {
  const [marvelItem, setMarvelItem] = useState<IMarvel | null>(null);
  const [marvelListData, setMarvelListData] = useState<IMarvel[] | unknown[]>(
    [] as IMarvel[]
  );
  const [search, setSearch] = useState<string>("");
  const { name } = useParams();

  // hero data

  const getMarvelData = async () => {
    await api.get("").then((res) => {
      setMarvelListData(res.data.data.results);
    });
  };

  const getMarvelDetail = async (name: string) => {
    await api.get(`/${name}`).then((res) => {
      setMarvelItem(res.data.data.results);
    });
  };

  const heroData = marvelListData?.filter((marvel: any) =>
    marvel.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    const storedMarvelItem = localStorage.getItem("marvelItem");

    if (storedMarvelItem) {
      setMarvelItem(JSON.parse(storedMarvelItem));
    } else if (name) {
      getMarvelDetail(name);
    }
  }, [name]);

  useEffect(() => {
    if (marvelItem) {
      localStorage.setItem("marvelItem", JSON.stringify(marvelItem));
    }
  }, [marvelItem]);

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
        marvelItem,
        heroData,
        setMarvelItem,
        getMarvelData,
        getMarvelDetail,
        nextPage,
        previousPage,
        setSearch,
      }}
    >
      {children}
    </MarvelContext.Provider>
  );
};

// const getMarvel = async (input: string) => {
//   await api.get(`/${input.toLowerCase()}`).then((res) => {
//     setMarvel(res.data.data.results);
//   });
// };
