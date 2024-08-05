import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./Design/Hero";
import { useRef } from "react";
import Generating from "./Generating";
import { heroIcons } from "../constants";
import Notification from "./Notification";
import { ScrollParallax } from "react-just-parallax";
export default function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crossesOffset={"lg:traslate-y-[5.25rem]"}
      crosses
      id="hero"
    >
      <div ref={parallaxRef} className="relative container max-w-[62rem] ">
        <div className="text-center">
          <h1 className="h1 mb-6 z-3">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative ">
              Brainwave
              <img src={curve} className="absolute w-full right-0 " />
            </span>
          </h1>
          <p className="body-1 text-n-2  lg:mb-8 max-w-3xl  mx-auto">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" className={""} white>
            Get Started
          </Button>
        </div>
        <div className="relative mt-[4rem] max-w-[23rem] mx-auto  md:max-w-5xl xl:mb-24">
          <div className="relative  z-2 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative bg-n-8 rounded-[1rem]">
              <ScrollParallax isAbsolutelyPositioned zIndex={1}>
                <ul className=" hidden lg:flex border border-n-1/10 rounded-2xl bg-n-9/40 absolute px-1 backdrop-blur -left-[5.5rem] bottom-[7.5rem] z-3">
                  {heroIcons.map((icon, index) => (
                    <li key={index} className="p-5">
                      <img src={icon} width={24} height={24} alt="icon" />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax zIndex={1} isAbsolutelyPositioned>
                <Notification
                  className={
                    "absolute -right-[5.5rem] border border-white z-3 bottom-[11rem] "
                  }
                  title={"Code generation"}
                />
              </ScrollParallax>
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div
                className="relative aspect-[33/40] rounded-b-[0.9rem] overflow-hidden
               md:aspect-[688/490] lg:aspect-[1024/490]
                "
              >
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] lg:-translate-y-[23%] md:scale-[1] md:-translate-y-[10%] "
                  alt="AI"
                  width={1024}
                  height={490}
                />
                <Generating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"
                  }
                />
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute z-[-1]   -top-[121%]  ">
            <img
              className="w-full"
              src={heroBackground}
              alt="hero_background"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>
      </div>
      <BottomLine className="absolute w-full left-0 bottom-[35%]  " />
    </Section>
  );
}
