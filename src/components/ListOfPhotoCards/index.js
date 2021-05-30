import React from "react";
import { usePhotos } from "../../hooks/usePhotos";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  const { photos, loading } = usePhotos();

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
