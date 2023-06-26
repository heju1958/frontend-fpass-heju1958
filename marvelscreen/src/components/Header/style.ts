import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  background-color: var(--red-0);
  border-radius: 30px 30px 0px 0px;
  height: 5rem;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 0.8rem;
    border-radius: 30px 0px 0px 30px;
    height: 2.8rem;
  }
  input::placeholder {
    color: var(--grey-1);
  }
  button {
    width: 3rem;
    height: 2.8rem;
    border-radius: 0px 30px 30px 0;
    background-color: var(--yellow-0);

    img {
      width: 1.6rem;
      height: 100%;
    }
  }

  button:hover {
    background-color: var(--yellow-1);
  }
`;
