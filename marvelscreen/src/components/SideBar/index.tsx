import marvelLogo from "../../assets/marvellogo.png";
import comicsLogo from "../../assets/comicslogo.png";

import { ContainerSideBar } from "./style";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <ContainerSideBar>
      <img
        src={marvelLogo}
        alt="marvel logo"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      />
      <img src={comicsLogo} alt="comics logo" />
    </ContainerSideBar>
  );
};

export default SideBar;
