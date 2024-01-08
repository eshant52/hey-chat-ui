/* eslint-disable react/prop-types */
import Avatar from "@components/dataDisplay/Avatar";
import { MoreVert } from "@mui/icons-material";

export default function Header({ dp }) {
  return (
    <header className="flex bg-slate-300 px-3 py-2.5">
      <div className="pl-3 pr-5">
        <Avatar src={dp} alt="Eshant Sonune" className="bg-slate-50 p-1" />
      </div>
      <div className="flex grow flex-col justify-between">
        <h1 className="text-md font-semibold text-black">Eshant Sonune</h1>
        <span className="text-sm">online</span>
      </div>
      <div className="flex items-center justify-center">
        <MoreVert />
      </div>
    </header>
  );
}
