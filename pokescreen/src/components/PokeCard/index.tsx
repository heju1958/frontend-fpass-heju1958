import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import { useNavigate } from "react-router-dom";
import { ContainerCard } from "./style";

const PokeCard = () => {
  const { marvelListData, marvel, getMarvelData, setMarvelItem } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMarvelData();
  }, []);

  if (marvelListData.length === 0) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <ContainerCard>
        {marvel ? (
          <li
            key={marvel.id}
            onClick={() => {
              setMarvelItem(marvel);
              navigate(`/pokepage/${marvel.name}`);
            }}
          >
            <div>
              <img
                src={marvel.thumbnail.path + "." + marvel.thumbnail.extension}
                alt="poke image"
              />
              <p>{marvel.name}</p>
            </div>
          </li>
        ) : (
          marvelListData?.map((marvel: any) => {
            return (
              <li
                key={marvel.id}
                onClick={() => {
                  setMarvelItem(marvel);
                  navigate(`/pokepage/${marvel.name}`);
                }}
              >
                <div>
                  <img
                    src={
                      marvel.thumbnail.path + "." + marvel.thumbnail.extension
                    }
                    alt="marvel hero image"
                  />
                  <p>{marvel.name}</p>
                </div>
              </li>
            );
          })
        )}
      </ContainerCard>
    </>
  );
};

export default PokeCard;
