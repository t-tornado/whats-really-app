import React from "react";
import { FiUser } from "react-icons/fi";
import { IUser } from "../utils";

interface Props {
  user: IUser | string;
}

export const UserCard: React.FC<Props> = (props) => {
  const username = props.user
    ? typeof props.user !== "string"
      ? props.user.username
      : props.user
    : "";
  return (
    <div className="flex items-center w-full space-x-4 p-3 pl-6 ml-0">
      <FiUser color="#000" size="24px" />
      <span className="text-sm text-default font-poppins">{username}</span>
    </div>
  );
};
