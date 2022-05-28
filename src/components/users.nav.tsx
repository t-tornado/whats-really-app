import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUser, useActiveUser, useSocket } from "../utils";
import { UserCard } from "./user.card";
import { AiOutlineLogin } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  setRecipient: (user: IUser) => void;
}

export const UsersNav: React.FC<Props> = (props) => {
  const { setRecipient } = props;
  const socket = useSocket();
  const [activeUser, setActiveUser] = useActiveUser();
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
  const [openBlockedUsers, setOpenBlockedUsers] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const { logout } = useAuth0();

  const username = activeUser?.username;

  const onLogout = () => {
    logout();
  };

  const renderUnblockedUsers = () => {
    return users.map((user, idx) => (
      <UserCard
        type="unblocked-users"
        user={user}
        key={idx}
        setRecipient={setRecipient}
      />
    ));
  };

  const renderBlockedUsers = () => {
    return blockedUsers.map((user, idx) => (
      <UserCard
        type="blocked-users"
        user={user}
        key={idx}
        setRecipient={setRecipient}
      />
    ));
  };

  useEffect(() => {
    socket.on("fetchUsers", (data) => {
      setUsers(data.users || []);
      setActiveUser(data.activeUser);
    });
    socket.on("afterBlockUserOperation", (blockedUsers) => {
      console.log("User has been blocked, getting updated user blocked users");
      console.log(blockedUsers);
      setBlockedUsers(blockedUsers);
    });

    socket.on("fetchBlockedUsers", (blockedUsers) => {
      console.log("Getting blocked users");
      setBlockedUsers(blockedUsers);
    });
  }, [socket]);

  const toggleOpenBlockedUsers = () => {
    setOpenBlockedUsers((p) => !p);
  };
  return (
    <div className="w-[25%] h-full m-0 p-0 bg-gray flex flex-col">
      <h1 className="p-6 text-lg font-poppinsBold text-lightBlue">Chats</h1>
      <div className={`flex flex-col bg-lightBlue mb-4 overflow-hidden`}>
        <div
          onClick={toggleOpenBlockedUsers}
          className="flex items-center justify-between px-4 pl-6"
        >
          <span className="font-poppinsMedium text-white text-sm pl-4 py-4">
            Blocked users
          </span>
          {openBlockedUsers ? (
            <>
              <BsChevronUp color="#fff" size="15px" />
            </>
          ) : (
            <>
              <BsChevronDown color="#fff" size="15px" />
            </>
          )}
        </div>
        <div
          className={`flex flex-col w-full transition-height transition-all ease-in-out duration-900 ${
            openBlockedUsers ? "min-h-32" : "h-0"
          } `}
        >
          {renderBlockedUsers()}
        </div>
      </div>
      <div className="relative flex flex-col flex-1 overflow-y-scroll ">
        {renderUnblockedUsers()}
      </div>

      <div className="flex h-[10%] justify-between items-center w-full pb-10 px-5 pl-10">
        <div className="flex flex-col space-y-2">
          <span className="text-base text-default font-poppinsMedium">
            {username}
          </span>
          <div className="flex space-x-2 items-center">
            <div className="w-2 h-2 bg-active rounded-full" />
            <span className="text-default text-sm font-poppins">Active</span>
          </div>
        </div>
        <div
          onClick={onLogout}
          className="flex space-x-3 items-center cursor-pointer"
        >
          <AiOutlineLogin color="red" size="15px" />
          <span className="text-base font-poppins text-red-500">log off</span>
        </div>
      </div>
    </div>
  );
};
