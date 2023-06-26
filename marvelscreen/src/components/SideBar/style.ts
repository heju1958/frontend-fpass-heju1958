import styled from "styled-components";

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--red-0);
  width: 7rem;
  height: 100vh;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    flex-direction: row;

    img {
      width: 5rem;
    }
  }

  @media (max-width: 1300px) {
    img {
      width: 4rem;
    }
  }
`;
