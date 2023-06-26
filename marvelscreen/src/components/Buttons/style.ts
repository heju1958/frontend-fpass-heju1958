import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    background-color: var(--red-0);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;

    img {
      margin-top: 0.3rem;
      width: 1rem;
    }
  }

  button:hover {
    background-color: var(--red-1);
  }

  .marvelItemButton {
    width: 10rem;
    height: 3rem;
    border-radius: 1rem;
    color: var(--color-primary);
  }
`;
