import React from "react";

interface ErrorProps {
  message: any;
}

const InputError = ({ message }: ErrorProps) => {
  return <span className="text-sm font-medium text-red-500">{message}</span>;
};

export default InputError;
