import NavsContentLayout from "./NavsContentLayout";
import NavLayout from "./NavLayout";
import ChatLayout from "./ChatLayout";
import { useState } from "react";

export default function AppLayout() {
  const [chatId, setChatId] = useState("");
  const [metaText, setMetaText] = useState([]);
  let showChat = true;

  if (chatId !== "") {
    showChat = false;
  }

  function setId(id) {
    setChatId(id)
  }
  
  return (
    <div className="divide-accent1 flex divide-x-[1px]">
      <div className="basis-18 shrink-0 grow-0">
        <NavLayout />
      </div>
      <aside className="w-[26rem] basis-[26rem]">
        <NavsContentLayout setChatId={setId} />
      </aside>
      <div className="grow">
        {showChat ? (
          <div className="flex h-screen flex-col justify-center overflow-scroll bg-primary bg-topography">
            <div className="self-center filter">
              <span className="text-4xl font-bold text-font-secondary bg-secondary/70 rounded-3xl px-11 py-10 drop-shadow-lg shadow-md">Hey!</span>
            </div>
          </div>
        ) : (
          <ChatLayout id={chatId} setMetaText={metaText}/>
        )}
      </div>
    </div>
  );
}
