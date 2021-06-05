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
              {(register, { data, loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password };
                  const variables = { input };
                  register({ variables }).then(activateAuth);
                };

                const errorMsg =
                  error &&
                  "Lo sentimos, ha ocurrido un error. Inténtalo más tarde.";

                return (
                  <>
                    <UserForm
                      onSubmit={onSubmit}
                      title="Registrarse"
                      error={errorMsg}
                      loading={loading}
                    />
                  </>
                );
              }}
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title="Iniciar Sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
