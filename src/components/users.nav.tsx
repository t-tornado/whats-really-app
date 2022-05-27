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
  const [openBlockedUsers, setOpenBlockedUsers] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const { logout } = useAuth0();

  const onLogout = () => {
    logout();
  };

  const renderUsers = () => {
    return users.map((user, idx) => (
      <UserCard user={user} key={idx} setRecipient={setRecipient} />
    ));
  };

  useEffect(() => {
    socket.on("fetchUsers", (data) => {
      setUsers(data.users || []);
      setActiveUser(data.activeUser);
    });
  }, [socket]);

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
      <div
        className={`
        } relative flex flex-col bg-red-100 mb-4`}
      >
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
          className={`flex flex-col overflow-y-scroll w-full transition-height transition-all ease-in-out duration-900 ${
            openBlockedUsers ? "h-32 overflow-hidden" : "h-0"
          } `}
        ></div>
      </div>
      <div className="relative flex flex-col flex-1 overflow-y-scroll ">
        {renderUsers()}
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
