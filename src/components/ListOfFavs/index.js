import React from "react";
import PropTypes from "prop-types";
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
