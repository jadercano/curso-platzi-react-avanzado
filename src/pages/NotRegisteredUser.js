import React from "react";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import Context from "../Context";

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {(register) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables }).then(activateAuth);
                };
                return <UserForm onSubmit={onSubmit} title="Registrarse" />;
              }}
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title="Iniciar Sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
