import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUser, useActiveUser, useSocket } from "../utils";
import { UserCard } from "./user.card";
import { BsChevronDown, BsChevronUp, BsFillHeptagonFill } from "react-icons/bs";

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

  console.log(blockedUsers);

  const toggleOpenBlockedUsers = () => {
    setOpenBlockedUsers((p) => !p);
  };
  return (
    <div className="w-[25%] h-full m-0 p-0 bg-navBg flex flex-col">
      <div className="h-[7%] py-6 w-full flex justify-center items-center bg-blue-200">
        <span className="font-poppinsMedium text-base text-darkBlue">
          {activeUser ? activeUser.username : ""}
        </span>
      </div>
      <div className={`flex flex-col bg-red-100 mb-4 overflow-hidden`}>
        <div
          onClick={toggleOpenBlockedUsers}
          className="flex items-center justify-between px-4 pl-6"
        >
          <span className="font-poppinsMedium text-red-500 text-sm pl-4">
            Blocked users
          </span>
          {openBlockedUsers ? (
            <>
              <BsChevronUp color="#000" size="12px" />
            </>
          ) : (
            <>
              <BsChevronDown color="#000" size="12px" />
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

      <div className="flex h-[10%] justify-center items-end w-full pb-10">
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
