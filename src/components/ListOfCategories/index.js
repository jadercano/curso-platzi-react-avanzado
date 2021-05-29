import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { Item, List } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((response) => setCategories(response));
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
