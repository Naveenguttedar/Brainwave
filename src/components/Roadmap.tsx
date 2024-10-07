import { check2, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading, { TagLine } from "./Heading";
import Section from "./Section";

export default function Roadmap() {
  return (
    <Section crosses id="roadmap">
      <div className="container mb-24 md:mb-10 ">
        <Heading
          tag="Ready to get started"
          title={"What we're working on"}
          className={""}
        />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";
            return (
              <div
                key={item.id}
                className={`lg:even:translate-y-[7rem]  p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "border bg-6"}`}
              >
                <div className="relative  p-8 bg-n-8 rounded-[2.4375rem] pb-24 xl:p-15 ">
                  <div className=" inset-8   ">
                    <div className="flex  items-center justify-between max-w-[27rem] mb-8  ">
                      <TagLine className={"  "}>{item.date}</TagLine>
                      <div className="flex gap-1  items-center px-4  py-1  bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                        />
                        <div className="  tagline hidden md:block ">
                          {status}
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-col ">
                      <img
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                      <div className="">
                        <h4 className="md:h4 md:mb-4 ">{item.title}</h4>
                        <p className="body-2  text-n-4">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
