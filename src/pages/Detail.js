import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Detail = ({
  match: {
    params: { detailId },
  },
}) => <PhotoCardWithQuery id={detailId} />;
