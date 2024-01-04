/* eslint-disable react/prop-types */
import { icons } from "../../assets";
import Avatar from "./Avatar";
import Icon from "./Icon";

export default function Card({ dp, name, date, recentText, muted, blocked, read }) {
  return (
    <div className="flex justify-between px-4 py-2.5 hover:bg-gray-200">
      <div className="">
        <Avatar src={dp} alt={name} className="bg-gray-200 p-1" />
      </div>
      <div className="flex w-[290px] flex-col justify-between">
        <div className="flex justify-between items-baseline">
          <div>
            <span className="font-semibold">{name}</span>
          </div>
          <div>
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="grow truncate text-sm">{recentText}</span>
          <span className="px-0.5">
            {muted && <Icon src={icons.mute} className="h-5 w-5" />}
          </span>
          <span className="px-0.5">
            {blocked && <Icon src={icons.block} className="h-5 w-5" />}
          </span>
        </div>
      </div>
    </div>
  );
}
