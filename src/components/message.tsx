import React from "react";

interface Props {
  self: boolean;
  message: string;
}

export const Message: React.FC<Props> = (props) => {
  const { self, message } = props;
  return (
    <div
      className={`flex items-center ${self ? "justify-end" : "justify-start"}`}
    >
      <p
        className={`${
          self ? "bg-lightBlue text-white" : "bg-white text-default"
        } text-sm font-poppins py-3 px-5 rounded-md max-w-[70%]`}
      >
        {message}
      </p>
    </div>
  );
};
