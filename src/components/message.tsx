import React from "react";
import { IMessage } from "../utils";

interface Props {
  message: IMessage;
  self: boolean;
}

export const Message: React.FC<Props> = (props) => {
  const { message, self } = props;
  const { body } = message;
  return (
    <div
      className={`flex items-center ${self ? "justify-end" : "justify-start"}`}
    >
      <p
        className={`${
          self ? "bg-lightBlue text-white" : "bg-gray text-default"
        } text-sm font-poppins py-3 px-5 rounded-md max-w-[70%]`}
      >
        {body}
      </p>
    </div>
  );
};
