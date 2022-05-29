import React from "react";
import { IUser } from "../utils";

interface Props {
  user: IUser;
}

export const ActiveRecipientCard: React.FC<Props> = (props) => {
  const {
    user: { username },
  } = props;
  return (
    <div className="border-b-[1px] border-gray flex w-full h-full items-center pl-7 ">
      <div className="text-darkBlue text-base font-poppinsBold">{username}</div>
    </div>
  );
};
