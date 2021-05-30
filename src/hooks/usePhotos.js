import { useState, useEffect } from "react";

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/photos")
      .then((res) => res.json())
      .then((response) => {
        setPhotos(response);
        setLoading(false);
      });
  }, []);

  return { photos, loading };
};
