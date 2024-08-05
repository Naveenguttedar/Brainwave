import { twMerge } from "tailwind-merge";
import { BottomLine } from "./Design/Hero";

type SectionType = {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPadding?: boolean;
  children?: React.ReactNode;
};
export default function Section({
  className,
  id,
  crosses,
  customPadding,
  children,
}: SectionType) {
  return (
    <div
      id={id}
      className={twMerge(
        "relative ",
        `${customPadding || "p-10 lg-py-16 xl:py-20"}`,
        `${crosses ? "lg:py-32 xl:py-40" : ""}`,
        `${className || ""}`,
      )}
    >
      {children}
      <div
        className="
        hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1
        pointer-events-none md:block lg:left-7.5 xl:left-10`
        "
      ></div>
      <div
        className="
       hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1
        pointer-events-none md:block lg:right-7.5 xl:right-10`
        "
      ></div>
      {crosses && (
        <>
          <BottomLine className="hidden lg:block" />
        </>
      )}
    </div>
  );
}
