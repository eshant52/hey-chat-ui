/* eslint-disable react/prop-types */
import { icons } from "../../assets";
import Avatar from "./Avatar";
import Icon from "./Icon";

export default function Card({ dp, name, date, recentText, muted, blocked }) {
  return (
    <div className="flex justify-between bg-slate-400 px-4 py-2">
      <div className="">
        <Avatar src={dp} alt={name} className="bg-gray-200 p-1" />
      </div>
      <div className="flex w-[290px] flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <span className="font-semibold">{name}</span>
          </div>
          <div>
            <span>{date}</span>
          </div>
        </div>
        <div className="flex">
          <span className="grow truncate text-sm">{recentText}</span>
          <span>
            <Icon src={icons.mic} className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  );
}
