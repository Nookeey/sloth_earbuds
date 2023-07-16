import React from "react";
import { twMerge } from "tailwind-merge";

interface OrderTitleProps {
  title: string;
  className?: string;
}

const OrderTitle = ({ title, className }: OrderTitleProps) => {
  return (
    <div
      className={twMerge("flex items-center justify-between mb-6", className)}
    >
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
    </div>
  );
};

export default OrderTitle;
