import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className="w-full max-w-[290px] md:min-w-[380px] text-center text-2xl border-solid border-4 border-[#8E05C2] py-4 rounded-full 
        hover:bg-[#8E05C2] hover:text-white transition
        "
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
