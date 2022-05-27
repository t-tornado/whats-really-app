import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IUser, useActiveUser, useSocket } from "../utils";
import { UserCard } from "./user.card";

interface Props {
  setRecipient: (user: IUser) => void;
}

export const UsersNav: React.FC<Props> = (props) => {
  const { setRecipient } = props;
  const socket = useSocket();
  const [activeUser, setActiveUser] = useActiveUser();
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

  return (
    <div className="w-[25%] h-full m-0 p-0 bg-navBg">
      <div className="h-[7%] py-6 w-full flex justify-center items-center">
        <span className="font-poppinsMedium text-base text-darkBlue">
          {activeUser ? activeUser.username : ""}
        </span>
      </div>
      <div className="flex flex-col h-[80%] overflow-y-scroll">
        {renderUsers()}
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
