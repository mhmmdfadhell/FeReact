import React from 'react'
import AuthLayout from '../../components/template/AuthLayout'

import Register from '../../components/organism/Register';

export default function SignUp() {
  return (
    <AuthLayout title="Sign-Up" desc="Please register">
        <Register/>
    </AuthLayout>
  );
}
