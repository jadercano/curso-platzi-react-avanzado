import React from "react";
import { Layout } from "../components/Layout";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
