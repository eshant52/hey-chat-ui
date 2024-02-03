/* eslint-disable react/prop-types */
import Avatar from "@components/dataDisplay/Avatar";
import { MoreVert } from "@mui/icons-material";

export default function Header({dp, className, ...props}) {
  return (
    <header className={`flex items-center ${className || ""}`} {...props}>
      <div className="pl-3 pr-5">
        <Avatar src={dp} alt="Eshant Sonune" className="bg-slate-100 p-1 size-10" />
      </div>
      <div className="flex grow flex-col justify-between">
        <h1 className="text-md font-semibold text-font-primary">Eshant Sonune</h1>
        <span className="text-xs">online</span>
      </div>
      <div className="flex items-center justify-center">
        <MoreVert />
      </div>
    </header>
  );
}
