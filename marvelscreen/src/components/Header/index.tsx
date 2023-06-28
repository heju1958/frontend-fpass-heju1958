import { useContext } from "react";
import { MarvelContext } from "../../contexts/marvelContext";

import { ContainerHeader, ContainerSearch } from "./style";
import searchIcon from "../../assets/search.svg";

const Header = () => {
  const { setSearch, getMarvelFilter, search, getMarvelData } =
    useContext(MarvelContext);

  const handleInput = (input: string) => {
    if (input === "") {
      getMarvelData();
    } else {
      setSearch(input);
    }
  };

  return (
    <ContainerHeader>
      <ContainerSearch>
        <input
          onChange={(event) => handleInput(event.target.value)}
          type="text"
          placeholder="Pesquise seu herói"
        />
        <button onClick={() => getMarvelFilter(search)}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </ContainerSearch>
    </ContainerHeader>
  );
};

export default Header;
