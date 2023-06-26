import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MarvelContext } from "../../contexts/marvelContext";
import {
  ContainerMarvelName,
  ContainerMarvelItem,
  ContainerAbilities,
} from "./style";
import { ContainerButton } from "../Buttons/style";

const MarvelItem = () => {
  const navigate = useNavigate();
  const { getMarvelDetail, marvelItem } = useContext(MarvelContext);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      getMarvelDetail(name);
    }
  }, []);

  return (
    <>
      <ContainerMarvelName>
        <p>{marvelItem?.name}</p>
      </ContainerMarvelName>
      <ContainerMarvelItem>
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
      </ContainerMarvelItem>
      <ContainerButton>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="marvelItemButton"
        >
          Voltar ao inicio
        </button>
      </ContainerButton>
    </>
  );
};

export default MarvelItem;
