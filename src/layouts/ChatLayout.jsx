import Avatar from "../components/dataDisplay/Avatar";
import Icon from "../components/dataDisplay/Icon";
import { icons } from "../assets";

export default function ChatLayout() {
  return (
    <div className="flex flex-col h-screen min-w-min bg-slate-400">
      <header className="flex bg-slate-300 py-2.5">
        <div className="px-6">
          <Avatar
            src={icons.person}
            alt="Eshant Sonune"
            className="bg-slate-50 p-1"
          />
        </div>
        <div className="">
          <h1 className="text-md font-semibold text-black">Eshant Sonune</h1>
          <span className="text-sm">online</span>
        </div>
      </header>
      <main className="grow bg-slate-500">

      </main>
      <footer className="flex bg-fuchsia-50 px-3 py-2">
        <div className="p-2.5">
          <Icon src={icons.attachFile} />
        </div>
        <div className="p-2.5">
          <Icon src={icons.mic} />
        </div>
        <div className="p-2.5 grow">
          <textarea />
        </div>
        <div className="p-2.5">
          <Icon src={icons.send} />
        </div>
      </footer>
    </div>
  );
}
