import { brackets } from "../assets/svg/Brackets";
import { twMerge } from "tailwind-merge";
export const TagLine = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={twMerge(className, "tagline flex items-center ")}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
export default function Heading({
  className,
  title,
  text,
  tag,
}: {
  className: string;
  title: string;
  text?: string;
  tag?: string;
}) {
  return (
    <div
      className={twMerge(
        className,
        "max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center  ",
      )}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4 ">{text}</p>}
    </div>
  );
}
