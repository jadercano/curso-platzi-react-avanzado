import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Email" type="text" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
};
