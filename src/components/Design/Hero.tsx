import { MutableRefObject } from "react";
import PlusSvg from "../../assets/svg/PlusSvg";
import { MouseParallax } from "react-just-parallax";
import { twMerge } from "tailwind-merge";
const mounted = true;
export const GradientLight = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "absolute -z-1 top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none",
        className,
      )}
    />
  );
};
export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};
export const BottomLine = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={className}>
        <div className=" absolute  w-[calc(100%-4rem)] top-0 left-7.5 right-7.5  h-0.25 bg-n-6 pointer-events-none xl:block" />

        <PlusSvg className=" absolute -top-1 left-7.5 -translate-x-1/2 z-2 pointer-events-none xl:block" />

        <PlusSvg className=" absolute -top-1  right-7.5 translate-x-1/2 z-2 pointer-events-none xl:block" />
      </div>
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[64.875rem] aspect-square -translate-x-1/2 -translate-y-1/2 z-1 border border-n-2/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square -translate-x-1/2 -translate-y-1/2 z-1 border border-n-2/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square -translate-x-1/2 -translate-y-1/2 z-1 border border-n-2/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square -translate-x-1/2 -translate-y-1/2 z-1 border border-n-2/10 rounded-full"></div>
    </>
  );
};

export const BackgroundCircles = ({
  parallaxRef,
}: {
  parallaxRef: MutableRefObject<null>;
}) => {
  return (
    <div className="absolute top-16 left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2  ">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 rotate-45 origin-bottom ">
          <div
            className={`w-2 h-2 -ml-1  bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className="absolute bottom-1/2 left-1/2  w-0.25 h-1/2 origin-bottom -rotate-[56deg]  ">
          <div
            className={`w-4 h-4 -ml-1  bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
        <div className=" hidden lg:block absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={` w-4 h-4 mt-[14.9rem] -ml-1  bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className=" absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute  bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 mt-24  bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="  absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-6 h-6 -ml-3 mt-10 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
