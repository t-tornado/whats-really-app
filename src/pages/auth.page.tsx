import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

export const AuthPage: React.FC = () => {
  const { loginWithPopup } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const submitCredentials = (e: any) => {
    e.preventDefault();
    loginWithPopup();
  };

  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center">
      <h1 className="text-default text-5xl font-poppinsBold tracking-wide">
        WhatsReallyApp?
      </h1>
      <p className="text-base font-poppins py-3">
        Sign in to your account below
      </p>
      <form className="w-[30%] h-48 flex flex-col justify-between mt-16 mb-10">
        <input
          type="email"
          className="w-full h-10 p-2 pl-4 rounded-md border-2 border-gray"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          className="w-full h-10 p-2 pl-4 rounded-md border-2 border-gray"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <input
          type="button"
          className="w-24 h-12 p-3 font-poppins text-white text-base bg-default rounded-md cursor-pointer"
          value="Sign in"
          onClick={submitCredentials}
        />
      </form>
      <div className="flex items-center space-x-2">
        <span className="text-base font-poppins text-default">
          Register with
        </span>
        <span className="text-base font-poppins text-lightBlue">Gmail!</span>
      </div>
    </div>
  );
};
