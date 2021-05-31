import React, { useEffect, useRef, useState } from "react";
import { Article, Button, Img, ImgWrapper } from "./styles";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `liked_${id}`;
  const [show, ref] = useNearScreen();
  const [liked, setLiked] = useLocalStorage(key, false);

  const handleSetLiked = () => {
    setLiked(!liked);
  };

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <Button type="button" onClick={handleSetLiked}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
