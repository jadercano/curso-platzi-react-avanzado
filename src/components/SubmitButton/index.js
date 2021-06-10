import React from "react";
import { Button } from "./styles";
import { Loading } from "../Loading";

export const SubmitButton = ({ disabled, title, onClick }) => {
  return (
    <Button type="submit" disabled={disabled} onClick={onClick}>
      {disabled ? <Loading /> : title}
    </Button>
  );
};
