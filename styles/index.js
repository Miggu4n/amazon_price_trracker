import styled from "styled-components";

import { ShoppingCart, Trash2 } from "@styled-icons/feather";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  width: 60%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 0.5rem;

  background-color: #ffffff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: flex;
  font-size: 14px;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem 0;
  padding: 1rem;

  grid-gap: 1rem;
  border-radius: 2rem;
  background-color: ${({ conviene }) => (conviene ? "#84DBB4" : "#FFFFFF")};

  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  transition: 0.05s ease-out;
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 25px;

  background: white;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  transition: 0.05s ease-out;
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Elimina = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 0.25rem;
  width: 35px;

  background: white;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  transition: 0.05s ease-out;
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Visit = styled(ShoppingCart)``;

export const Delete = styled(Trash2)`
  color: #e75a7c;
`;

export const Title = styled.p`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: #2c363f;
`;

export const ActualPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2c363f;
`;
