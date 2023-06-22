import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/auth";

export default function HomePage() {
  const [auth, setAuth] = useAuth();

  return (
    <Layout title={"Homepage"}>
      {" "}
      <h1> HomePage </h1> <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}
