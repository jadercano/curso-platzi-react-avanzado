import React from "react";
import { gql } from "@apollo/client";
import { Mutation } from "@apollo/client/react/components";

const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_ANONYMOUS_PHOTO}>{children}</Mutation>;
};
