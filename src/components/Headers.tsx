import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./Design/Header";
import { useState } from "react";
export default function Headers() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={twMerge(
        "fixed w-full left-0   top-0 z-50 bg-n-8/90  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm",
        `${openNavigation ? "bg-n-8 " : "bg-n-8/90 "}`,
      )}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={9} alt="brainwave" />
        </a>
        <nav
          className={twMerge(
            `${openNavigation ? "flex" : "hidden"}`,
            " fixed text-center w-full  top-[5rem]  left-0 reight-0 bottom bg-n-8 lg:static  lg:flex lg:mx-auto lg:bg-transparent",
          )}
        >
          <div
            className={twMerge(
              "relative z-2 flex flex-col itmes-center justify-center m-auto h-screen md:h-full lg:flex-row ",
            )}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden " : ""} px-6 py-6 md:py-8 lg: -mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-3 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button text-nowrap hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 px-1 lg:block"
        >
          New account
        </a>
        <Button
          className={"hidden text-nowrap lg:block text-white"}
          white={false}
        >
          Sign in
        </Button>
        <Button
          className={"ml-auto lg:hidden "}
          px={"px-3"}
          white={false}
          onclick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}
