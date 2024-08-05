import { smallSphere } from "../assets";
import Section from "./Section";

export default function Pricing() {
  return (
    <Section crosses id="pricing">
      <div className="">
        <div className="container">
          <div className="relative lg:flex justify-center mb-[6.5rem]">
            <img src={smallSphere} />
          </div>
        </div>
      </div>
    </Section>
  );
}
