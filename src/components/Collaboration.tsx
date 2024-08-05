import { brainwaveSymbol, check, curve1, curve2 } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

export default function Collaboration() {
  return (
    <Section crosses id="collaboration">
      <div className="container lg:flex ">
        <div className="max-w-[25rem]">
          <h2 className="h2 ">AI Chat App for seamless collaboration</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3 ">
                <div className="flex items-center gap-3">
                  <img src={check} alt="check" />
                  <h6 className="body-2 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 text-n-4 mt-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button className={"text-white uppercase"} white={false}>
            Try it now
          </Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4 flex flex-col  items-center">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-24 lg:w-[22rem] lg:mx-auto ">
            {collabText}
          </p>
          <div className="realative  flex w-[22rem] aspect-square border border-n-6 rounded-full inset-0  scale:75 md:scale-100 ">
            <div className="w-60 aspect-square m-auto flex border-n-6 border relative rounded-full    ">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full ">
                <div className="flex items-center justify-center w-full aspect-square  bg-n-8 rounded-full">
                  <img src={brainwaveSymbol} alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute left-1/2 -translate-x-1/2  h-[22rem]  origin-center  rotate-${index * 45}`}
                >
                  <div
                    className={` border -translate-y-1/2 border-n-1/15 rounded-xl w-[3.2rem] h-[3.2rem]  -rotate-${index * 45} flex  `}
                  >
                    <img
                      className="m-auto "
                      width={item.width}
                      height={item.height}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className=" hidden lg:block absolute w-[32.625rem] right-full mr-8 bottom-0">
              <img src={curve1} alt="curve1" />
            </div>
            <div className="absolute hidden lg:block  w-[10.125rem] left-full -bottom-8">
              <img
                className="scale-[1.2]"
                src={curve2}
                alt="curve2"
                width={162}
                height={76}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
