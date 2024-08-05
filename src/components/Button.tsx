import { MouseEventHandler } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  className: string;
  href?: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  px?: string;
  white: boolean;
};
const Button = ({
  className,
  href,
  onclick,
  children,
  px = "px-7",
  white = false,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes + "text-n-8"} onClick={onclick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};
export default Button;
