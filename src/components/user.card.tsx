import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsFillHeptagonFill, BsThreeDots } from "react-icons/bs";
import { IUser, useActiveUser, useSocket } from "../utils";

interface Props {
  user: IUser;
  type?: "blocked-users" | "unblocked-users";
  setRecipient?: (user: IUser) => void;
}

export const UserCard: React.FC<Props> = (props) => {
  const { user, type } = props;
  const socket = useSocket();
  const activeUser = useActiveUser()[0];
  // const [statusChanged, setStatusChanged] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const username = user.username;
  const defaultColor = type === "blocked-users" ? "white" : "default";
  const setCurrentRecipient = () => {
    props.setRecipient && props.setRecipient(user);
    if (openOptions) {
      setOpenOptions(false);
    }
  };
  const toggleOptions = () => {
    setOpenOptions((p) => !p);
  };

  const blockUser = () => {
    if (type === "blocked-users") {
      const params = {
        user_id: activeUser?._id,
        unblock_user_id: props?.user?._id,
      };
      socket.emit("unBlockUser", params);
    } else {
      const params = {
        user_id: activeUser?._id,
        block_user_id: props?.user?._id,
      };
      socket.emit("blockUser", params);
    }
    setOpenOptions(false);
  };

  return (
    <div
      className={`flex flex-col items-center w-full py-4 pl-6 ml-0 cursor-pointer transition-height transition-all ease-in-out duration-1000 ${
        openOptions ? "h-34" : "h-16"
      } `}
    >
      <div className="flex w-full">
        <div
          className="flex space-x-6 p-3 flex-1 items-center"
          onClick={setCurrentRecipient}
        >
          {" "}
          <div
            className={`${
              type === "blocked-users" ? "hidden" : ""
            } w-2 h-2 rounded-full bg-${user.status ? "active" : "default"}`}
          />
          <div
            className={`${
              type === "blocked-users" ? "border-white" : "border-darkBlue"
            } flex justify-center items-center p-1 border-2  rounded-full `}
          >
            <FiUser color={defaultColor} size="24px" />
          </div>
          <span
            className={`text-${defaultColor} text-sm font-poppins flex flex-1`}
          >
            {username}
          </span>
        </div>
        <div className="flex justify-end items-center px-2">
          <BsThreeDots
            onClick={toggleOptions}
            color={defaultColor}
            size="15px"
          />
        </div>
      </div>
      <div
        className={`${
          openOptions ? "h-14 p-3" : "h-0 p-0 overflow-hidden"
        } flex w-full space-x-6 pl-6 bg-white rounded-b-lg items-center justify-between px-5 transition-height transition-all duration-600 ease-in-out hover:bg-gray`}
        onClick={blockUser}
      >
        <span className="text-sm text-default font-poppins">
          {type === "unblocked-users" ? "block" : "unblock"}
        </span>
        <BsFillHeptagonFill color="red" size="15px" />
      </div>
    </div>
  );
};
