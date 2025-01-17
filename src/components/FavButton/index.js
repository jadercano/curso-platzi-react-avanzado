import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button type="button" onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
