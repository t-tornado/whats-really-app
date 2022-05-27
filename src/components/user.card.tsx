import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import {
  BsCaretDown,
  BsCaretUp,
  BsFillHeptagonFill,
  BsThreeDots,
} from "react-icons/bs";
import { IUser } from "../utils";

interface Props {
  user: IUser;
  source?: "listed";
  setRecipient?: (user: IUser) => void;
}

export const UserCard: React.FC<Props> = (props) => {
  const [openOptions, setOpenOptions] = useState(false);
  const username = props.user.username;
  const setCurrentRecipient = () => {
    props.setRecipient && props.setRecipient(props?.user);
    if (openOptions) {
      setOpenOptions(false);
    }
  };
  const toggleOptions = () => {
    setOpenOptions((p) => !p);
  };
  return (
    <div
      className={`flex flex-col items-center w-full py-4 pl-6 ml-0 cursor-pointer transition-height transition-all ease-in-out duration-1000 ${
        openOptions ? "h-34" : "h-16"
      } `}
    >
      <div className="flex w-full">
        <div
          className="flex space-x-6 p-3 flex-1"
          onClick={setCurrentRecipient}
        >
          <FiUser color="#000" size="24px" />
          <span className="text-sm text-default font-poppins flex flex-1">
            {username}
          </span>
        </div>
        <div className="flex w-10 justify-end items-center pr-2">
          <BsThreeDots onClick={toggleOptions} color="#000" size="15px" />
        </div>
      </div>
      <div
        className={`${
          openOptions ? "h-14 p-3" : "h-0 p-0 overflow-hidden"
        } flex w-full space-x-6 pl-6 bg-white rounded-b-lg items-center justify-between px-5 transition-height transition-all duration-600 ease-in-out hover:bg-gray`}
        onClick={setCurrentRecipient}
      >
        <span className="text-sm text-default font-poppins">Block</span>
        <BsFillHeptagonFill color="red" size="15px" />
      </div>
    </div>
  );
};
