import styled from "@emotion/styled";
import { Link } from 'react-router-dom';


export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  // max-width: 1600px;
    margin: 0 auto;
   
`;

export const BackLink = styled(Link)`
//    display: flex;
  font-size: 14px;
//   align-items: center;
  column-gap: 10px;
  `

export const MovieImage = styled.div`
// width: 100%;
    height: auto;
    margin-right: 30px;
`;

export const MovieInfo = styled.div`
 display: flex;
//   flex-direction: column;
  margin-right: 20px;
`;

export const DetailsContainer = styled.div`
display: block;
//   align-items: flex-start;
gap: 10px
`

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const DetailsTitle = styled.h3`
  font-size:32px;
  margin-bottom: 10px;
`

export const Rating = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;
export const Overview = styled.p`
font-size: 24px;
  margin-bottom: 10px;
 
`;

export const GenresList = styled.ul`
  list-style: none;
  display: block;
  padding: 0;
  gap: 16px;
`;

export const GenreItem = styled.li`
font-size: 24px;
  margin-bottom: 5px;
`;

export const AdditionalInfo = styled.div`
display: block;
margin-top: 20px;
`;

export const AdditionalInfoTitle = styled.h5`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const AdditionalInfoList = styled.ul`
  list-style-type: none;
padding: 0;
  margin: 0;
`;

export const AdditionalInfoItem = styled.li`
  margin-bottom: 5px;
`;

export const AdditionalInfoLink = styled(Link)`
  display: inline-block;
  font-size: 24px;
  margin-right: 10px;
  text-decoration: none;
  color: #000;
  transition: color 0.3s;

  &:hover {
    color: #888;
  `