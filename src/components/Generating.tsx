import { twMerge } from "tailwind-merge";
import { loading } from "../assets";

export default function Generating({ className }: { className: string }) {
  return (
    <div
      className={twMerge(
        "flex items-center  gap-2 h-[3rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base",
        className || "",
      )}
    >
      <img src={loading} alt="laoding" className="w-5 h-5" />
      AI is generating a response...
    </div>
  );
}
