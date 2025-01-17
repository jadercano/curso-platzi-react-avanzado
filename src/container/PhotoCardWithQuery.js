import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
};
