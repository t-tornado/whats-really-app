import React from "react";
import { FiUser } from "react-icons/fi";

export const UserCard: React.FC = () => {
  return (
    <div className="flex items-center w-full space-x-4 p-3 pl-6 ml-0">
      <FiUser color="#000" size="24px" />
      <span className="text-sm text-default font-poppins">user1@gmail.com</span>
    </div>
  );
};
