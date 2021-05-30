import React from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import { useCategories } from "../../hooks/useCategories";
import { useShowFixed } from "../../hooks/useShowFixed";

export const ListOfCategories = () => {
  const { categories, loading } = useCategories();
  const showFixed = useShowFixed();

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
