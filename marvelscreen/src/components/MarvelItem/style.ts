import styled from "styled-components";

export const ContainerMarvelName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--red-0);
  border-radius: 30px 30px 0px 0px;
  height: 5rem;

  p {
    color: var(--color-primary);
    font-size: 2rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerMarvelItem = styled.div`
  display: flex;
  padding: 3rem;
  align-items: center;
  margin-top: 2rem;
  justify-content: space-around;
  gap: 2rem;

  img {
    width: 30rem;
    border-radius: 1rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    img {
      width: 15rem;
    }
  }
`;

export const ContainerApparition = styled.div`
  background-color: var(--red-0);
  width: 22rem;
  height: 22rem;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    transform: scale(1.03);
    transition: 0.6s;
  }

  span {
    color: var(--yellow-0);
    font-size: 1.5rem;
  }

  p {
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    width: 90%;
    height: 18rem;
    p {
      font-size: 1.1rem;
    }
    span {
      font-size: 1.1rem;
    }
  }
`;
