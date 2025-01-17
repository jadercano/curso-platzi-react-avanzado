import React from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";
import { useCategories } from "../../hooks/useCategories";
import { useShowFixed } from "../../hooks/useShowFixed";

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategories();
  const showFixed = useShowFixed();

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
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

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
