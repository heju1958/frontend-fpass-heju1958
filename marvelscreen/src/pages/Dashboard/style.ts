import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxDashboard = styled.div`
  margin: 2rem;
  background-color: var(--color-primary);
  border-radius: 2rem;
  width: 100%;
  box-shadow: var(--shadow-0);

  @media (max-width: 768px) {
    margin: 1rem;
    width: 90%;
  }
`;
