import { useContext } from "react";
import { MarvelContext } from "../../contexts/marvelContext";
import { useNavigate } from "react-router-dom";
import { ContainerCard } from "./style";
import { IMarvel } from "../../interfaces";

const MarvelCard = () => {
  const { marvelListData, setMarvelItem } = useContext(MarvelContext);
  const navigate = useNavigate();

  if (marvelListData.length === 0) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <ContainerCard>
        {marvelListData?.map((marvel: IMarvel | any) => {
          return (
            <li
              key={marvel.id}
              onClick={() => {
                navigate(`/marvelpage/${marvel.name}`);
                setMarvelItem(marvel);
              }}
            >
              <div>
                <img
                  src={marvel.thumbnail.path + "." + marvel.thumbnail.extension}
                  alt="marvel hero image"
                />
                <p>{marvel.name}</p>
              </div>
            </li>
          );
        })}
      </ContainerCard>
    </>
  );
};

export default MarvelCard;
