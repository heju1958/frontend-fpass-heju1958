import styled from "styled-components";

export const ContainerCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  list-style: none;
  margin: 2rem;
  gap: 1.5rem;
  height: 75%;
  padding: 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 20rem;
    height: 16rem;
    box-shadow: var(--shadow-1);
    cursor: pointer;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
    }
    p {
      color: var(--red-0);
      font-size: 1.3rem;
    }

    @media (max-width: 1300px) {
      width: 17rem;
      height: 11rem;

      img {
        width: 8rem;
        height: 8rem;
      }
    }
    animation: roll 1.5s;
  }

  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
      background-color: var(--red-2);
    }
  }

  li:hover {
    transform: scale(1.08);
    transition: 0.5s;
  }
`;
