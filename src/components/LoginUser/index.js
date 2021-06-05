import React, { useContext } from "react";
import { Context } from "../../Context";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { UserForm } from "../UserForm";

export const LoginUser = () => {
  const { activateAuth } = useContext(Context);
  const { loginUser, data, error, loading } = useLoginMutation();

  const handleLogin = ({ email, password }) => {
    loginUser(email, password).then(({ data: { login } }) =>
      activateAuth(login)
    );
  };

  const errorMsg =
    error && "Lo sentimos, ha ocurrido un error. Inténtalo más tarde.";

  return (
    <UserForm
      onSubmit={handleLogin}
      title="Iniciar Sesión"
      error={errorMsg}
      loading={loading}
    />
  );
};
