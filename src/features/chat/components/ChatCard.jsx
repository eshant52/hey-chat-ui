/* eslint-disable react/prop-types */
import { Block, NotificationsOff } from "@mui/icons-material";
import Avatar from "@components/dataDisplay/Avatar";

export default function ChatCard({
  dp,
  name,
  date,
  recentText,
  muted,
  read,
  blocked,
  ...props
}) {
  return (
    <div
      className="flex space-x-3 bg-primary px-4 py-2.5 hover:bg-secondary/50"
      {...props}
    >
      <div className="shrink-0">
        <Avatar src={dp} alt={name} className="bg-accent2" />
      </div>
      <div className="flex min-w-0 grow flex-col justify-center">
        <div className="flex items-baseline">
          <div className="grow overflow-hidden break-words">
            <span className=" font-medium text-font-primary">{name}</span>
          </div>
          <div className="truncate">
            <span className="text-xs capitalize text-font-secondary">
              {date}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-7">
          <div className="grow truncate">
            <span className="text-sm text-font-secondary">{recentText}</span>
          </div>
          <div className="flex items-center space-x-0.5">
            <span>{muted && <NotificationsOff fontSize="" />}</span>
            <span>{blocked && <Block fontSize="" />}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
