import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../contexts/pokemonContext";
import {
  ContainerPokeName,
  ContainerPokeItem,
  ContainerAbilities,
} from "./style";
import { ContainerButton } from "../Buttons/style";

const PokeItem = () => {
  const navigate = useNavigate();
  const { getMarvelDetail, marvelItem } = useContext(PokemonContext);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      getMarvelDetail(name);
    }
  }, []);

  return (
    <>
      <ContainerPokeName>
        <p>{marvelItem?.name}</p>
      </ContainerPokeName>
      <ContainerPokeItem>
        <img
          src={
            marvelItem?.thumbnail?.path + "." + marvelItem?.thumbnail?.extension
          }
          alt=""
        />
        <ContainerAbilities>
          <p>Abilities</p>
          {/* {marvelItem?.abilities?.map((elem, index) => {
            return (
              <div key={index}>
                <p>{elem?.ability?.name}</p>
                <span>slot {elem?.slot}</span>
              </div>
            );
          })} */}
          <div>
            <p>weight</p>
            {/* <span> {marvelItem.weight}</span> */}
          </div>
        </ContainerAbilities>
      </ContainerPokeItem>
      <ContainerButton>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="pokeItemButton"
        >
          Voltar ao inicio
        </button>
      </ContainerButton>
    </>
  );
};

export default PokeItem;
