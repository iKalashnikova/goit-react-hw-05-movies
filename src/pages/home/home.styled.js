import styled from "@emotion/styled";
import { Link } from 'react-router-dom';


export const HomeDiv = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
`

export const MovieList = styled.ul`
list-style: none;
  padding: 0;
`
export const MovieItem = styled.li`
 margin-bottom: 10px;
`

export const MovieLink = styled(Link)`
 text-decoration: none;
  color: #007bff;
  font-weight: bold;
  
   &:hover {
    color: #ff0000;
  }
`

