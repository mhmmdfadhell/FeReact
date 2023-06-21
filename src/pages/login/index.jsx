import React from "react";
import AuthLayout from "../../components/template/AuthLayout";
import Login from "../../components/organism/Login";

export default function SignIn() {
  return (
    <AuthLayout title="Sign-In" desc="Please Login">
      <Login />
    </AuthLayout>
  );
}
