import Avatar from "@components/dataDisplay/Avatar";

/* eslint-disable react/prop-types */
export default function ChatBox({ time, message, isUser, dp, ...props }) {
  const isFlexReverse = isUser ? "flex-row-reverse" : "";

  return (
    <div className={`flex ${isFlexReverse}`} {...props}>
      {isUser ? (
        <div className="my-2 flex space-x-2">
          <div className=" flex w-fit min-w-32 max-w-xl flex-col space-y-2 rounded-lg bg-accent1/80 px-3 py-2 shadow-md drop-shadow-lg">
            <span className="text-pretty pr-5">{message}</span>
            <span className=" self-end text-xs ">{time}</span>
          </div>
          <div className="flex items-end pb-1 ">
            <Avatar
              className="size-7 bg-gray-300 shadow-md drop-shadow-lg"
              src={dp}
            />
          </div>
        </div>
      ) : (
        <div className="my-2 flex space-x-2">
          <div className="flex items-end pb-1 ">
            <Avatar
              className="size-7 bg-gray-300 shadow-md drop-shadow-lg"
              src={dp}
            />
          </div>
          <div className="flex w-fit min-w-32 max-w-xl flex-col space-y-2 rounded-lg bg-accent1/80 px-3 py-2 shadow-md drop-shadow-lg">
            <span className="text-pretty pr-5">{message}</span>
            <span className="self-end text-xs">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
}
