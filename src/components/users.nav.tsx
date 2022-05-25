import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { UserCard } from "./user.card";

export const UsersNav: React.FC = () => {
  const { logout } = useAuth0();

  const onLogout = () => {
    logout();
  };

  return (
    <div className="w-[25%] h-full m-0 p-0 bg-navBg">
      <div className="h-[7%] py-6 w-full flex justify-center items-center">
        <span className="font-poppinsMedium text-base text-darkBlue">
          example@gmail.com
        </span>
      </div>
      <div className="flex flex-col h-[80%] overflow-y-scroll">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="flex h-[10%] justify-center items-end w-full">
        <button
          onClick={onLogout}
          className="p-2 justify-center items-center w-32 rounded-lg bg-default text-white font-poppins text-sm"
        >
          Log off
        </button>
      </div>
    </div>
  );
};
