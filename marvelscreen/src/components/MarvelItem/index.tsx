import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MarvelContext } from "../../contexts/marvelContext";
import {
  ContainerMarvelName,
  ContainerMarvelItem,
  ContainerApparition,
} from "./style";
import { ContainerButton } from "../Buttons/style";

const MarvelItem = () => {
  const navigate = useNavigate();
  const { marvelItem, getMarvelDetail, setMarvelItem } =
    useContext(MarvelContext);
  const { name } = useParams();

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
