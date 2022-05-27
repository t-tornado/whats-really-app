import React from "react";
import { FiUser } from "react-icons/fi";
import { IUser } from "../utils";

interface Props {
  user: IUser;
  source?: "listed";
  setRecipient?: (user: IUser) => void;
}

export const UserCard: React.FC<Props> = (props) => {
  const username = props.user.username;
  const setCurrentRecipient = () => {
    props.setRecipient && props.setRecipient(props?.user);
  };
  return (
    <div
      onClick={setCurrentRecipient}
      className="flex items-center w-full space-x-4 p-3 pl-6 ml-0 cursor-pointer"
    >
      <FiUser color="#000" size="24px" />
      <span className="text-sm text-default font-poppins">{username}</span>
    </div>
  );
};
