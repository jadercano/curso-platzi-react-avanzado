import React from "react";
import { SubmitButton } from "../SubmitButton";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./styles";

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  const disabled = loading === true;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder="Email" type="text" disabled={disabled} {...email} />
        <Input
          placeholder="Password"
          type="password"
          disabled={disabled}
          {...password}
        />
        <SubmitButton type="submit" disabled={disabled} title={title} />
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
