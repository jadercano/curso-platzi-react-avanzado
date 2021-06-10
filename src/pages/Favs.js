import React from "react";
import { Layout } from "../components/Layout";
import { GetFavorites } from "../container/GetFavorites";

export default () => {
  return (
    <Layout title="Favoritos" subtitle="Tus fotos favoritas.">
      <GetFavorites />
    </Layout>
  );
};
