import React, { useContext } from "react";
import { LoginUser } from "../components/LoginUser";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { Context } from "../Context";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data: { signup } }) =>
              activateAuth(signup)
            );
          };

          const errorMsg =
            error && "Lo sentimos, ha ocurrido un error. Inténtalo más tarde.";

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
      <LoginUser />
    </>
  );
};
