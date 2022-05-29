import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";

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
      <div className="w-[23%] h-48 flex flex-col justify-between mt-16 mb-10">
        <button
          className="flex p-3 space-x-4 font-poppins text-white text-base bg-default rounded-md cursor-pointer"
          onClick={submitCredentials}
        >
          <span className="text-white text-base">
            Proceed to authentication
          </span>
          <FiChevronsRight color="#fff" size="25px" />
        </button>
      </div>
    </div>
  );
};
