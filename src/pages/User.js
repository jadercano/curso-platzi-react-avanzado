import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { SubmitButton } from "../components/SubmitButton";
import { Context } from "../Context";

export const User = () => {
  const { removeAuth } = useContext(Context);

  return (
    <Layout title="User" subtitle="Administra tu cuenta Petgram.">
      <SubmitButton onClick={removeAuth} title="Cerrar Sesión" />
    </Layout>
  );
};
