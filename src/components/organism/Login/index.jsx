import React, { useState, useEffect, useRef } from "react";
import InputForm from "../../molecules/InputForm";
import Button from "../../atom/Button";

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("udah klik login");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("Remember Me:", rememberMe);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin} className="w-full p-10">
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="masukan email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="masukan password"
      />
      <div className="flex items-center my-4">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={handleRememberMeChange}
          className="mr-2"
        />
        <label htmlFor="rememberMe" className="text-gray-500">
          Remember Me
        </label>
      </div>
      <Button type="submit" color="bg-green-500 w-full">
        Login
      </Button>
    </form>
  );
}
