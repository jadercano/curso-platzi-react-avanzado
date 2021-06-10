import React from "react";
import { Grid, Image, StyledLink } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((fav) => (
        <StyledLink key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </StyledLink>
      ))}
    </Grid>
  );
};
