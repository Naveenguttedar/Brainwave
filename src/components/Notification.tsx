import { twMerge } from "tailwind-merge";
import { notification1 } from "../assets";
import { notificationImages } from "../constants";
export default function Notification({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div
      className={twMerge(
        "hidden lg:flex px-2 py-2 pr-6 bg-9/40 backdrop-blur border border-n-1/10 gap-3 rounded-2xl ",
        className || "",
      )}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex ">
            {notificationImages.map((image, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden "
              >
                <img
                  src={image}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={image}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
}
