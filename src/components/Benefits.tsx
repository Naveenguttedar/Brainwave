import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./Design/Hero";
export default function Benefits() {
  return (
    <>
      <Section crosses id="features">
        <div className="container">
          <Heading
            className={"md:max-w-md lg:max-w-2xl"}
            title={"Chat Smarter, Not Harder with Brainwave"}
          />
          <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="block backdrop-blur relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative  flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className=" h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto justify-between">
                    <img src={item.iconUrl} alt={item.title} />
                    <div className="flex gap-1 items-center">
                      <span className="uppercase text-n-1 tracking-wider font-bold font-code text-xs ">
                        explore more
                      </span>
                      <Arrow />
                    </div>
                  </div>
                  {item.light && <GradientLight />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
