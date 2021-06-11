import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";
import { Loading } from "../Loading";

export const SubmitButton = ({ disabled, title, onClick }) => {
  return (
    <Button type="submit" disabled={disabled} onClick={onClick}>
      {disabled ? <Loading /> : title}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
