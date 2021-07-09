import React from "react";
import Login from "../../components/login";

interface LoginPageProps {
  nextStageURL: string;
}

function LoginPage({ nextStageURL }: LoginPageProps) {
  return <Login nextStageURL={nextStageURL} />;
}

export default LoginPage;
