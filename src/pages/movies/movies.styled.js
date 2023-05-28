import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const SearchContainer = styled.div`
  margin-bottom: 10px;
`;

export const InputEl = styled.input`
outline:transparent;
  padding: 5px;
  font-size: 16px;
`;

export const ButtonEl = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const LinkStyled = styled(Link)`
 text-decoration: none;
  color: #007bff;
  font-weight: bold;
  
   &:hover {
    color: #ff0000;
  }
`;
