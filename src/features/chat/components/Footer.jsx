import { Add, Mic, Send } from "@mui/icons-material";
import MessageBox from "@components/input/MessageBox";

export default function Footer() {
  return (
    <footer className="flex items-center justify-evenly bg-fuchsia-50 px-3 py-2">
      <div className="p-2.5">
        <Add sx={{ fontSize: "2rem" }} />
      </div>
      <div className="p-2.5">
        <Mic />
      </div>
      <div className="grow self-stretch px-2.5">
        <MessageBox />
      </div>
      <div className="p-2.5">
        <Send />
      </div>
    </footer>
  );
}
