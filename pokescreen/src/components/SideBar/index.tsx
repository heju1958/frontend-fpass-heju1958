import { ContainerSideBar } from "./style";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <ContainerSideBar>
      <img
        src={""}
        alt="marvel logo"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      />
      <img src={""} alt="marvel logo" />
    </ContainerSideBar>
  );
};

export default SideBar;
