import ChatBubbleWing from "../assets/svg/ChatBubbleWing";

export default function PhotoChatMessage() {
  return (
    <div className="absolute max-w-[17.5rem] py-6 px-8 rounded-t-xl  bg-black right-15 top-8 rounded-bl-xl font-code text-base ">
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className={" absolute left-full bottom-0 "} />
    </div>
  );
}
