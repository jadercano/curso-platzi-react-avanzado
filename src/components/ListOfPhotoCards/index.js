import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({ data: { photos, loading } }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
