/* eslint-disable react/prop-types */
import { Block, NotificationsOff } from "@mui/icons-material";
import Avatar from "./Avatar";

export default function ChatCard({
  dp,
  name,
  date,
  recentText,
  muted,
  blocked,
}) {
  return (
    <div className="flex justify-between px-4 py-2.5 hover:bg-gray-200">
      <div className="">
        <Avatar src={dp} alt={name} className="bg-gray-200 p-1" />
      </div>
      <div className="flex w-[290px] flex-col justify-between">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-semibold">{name}</span>
          </div>
          <div>
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="grow truncate text-sm">{recentText}</span>
          <span className="px-0.5">
            {muted && <NotificationsOff fontSize=""/>}
          </span>
          <span className="px-0.5">
            {blocked && <Block fontSize=""/>}
          </span>
        </div>
      </div>
    </div>
  );
}
