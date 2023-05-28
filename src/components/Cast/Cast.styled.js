import styled from "@emotion/styled";

export const CastContainer = styled.div`
margin-bottom: 20px;`

export const ActorList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
`;

export const ActorItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ActorImage = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

export const ActorName = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`;

export const ActorCharacter = styled.p`
  margin-bottom: 10px;
  font-size: 22px;
`;