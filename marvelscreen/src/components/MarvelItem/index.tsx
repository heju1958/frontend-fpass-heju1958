import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MarvelContext } from "../../contexts/marvelContext";
import {
  ContainerMarvelName,
  ContainerMarvelItem,
  ContainerApparition,
} from "./style";
import { ContainerButton } from "../Buttons/style";

const MarvelItem = () => {
  const navigate = useNavigate();
  // const { name } = useParams();
  const { marvelItem, getMarvelDetail } = useContext(MarvelContext);

  // useEffect(() => {
  //   if (name) {
  //     getMarvelDetail(name);
  //   }
  // }, [marvelItem]);

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
          alt="image hero"
        />
        <ContainerApparition>
          <p>Apparition</p>
          <div>
            <p>series</p>
            <span> {marvelItem?.series?.available}</span>
          </div>
          <div>
            <p>stories</p>
            <span> {marvelItem?.stories?.available}</span>
          </div>
        </ContainerApparition>
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
