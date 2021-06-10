import React from "react";
import { Layout } from "../components/Layout";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

const HomePage = ({
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

export const Home = React.memo(HomePage, (prevProvs, props) => {
  return prevProvs.match.params.id === props.match.params.id;
});
