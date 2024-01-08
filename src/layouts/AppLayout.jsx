import NavsContentLayout from "./NavsContentLayout";
import NavLayout from "./NavLayout";
import ChatLayout from "./ChatLayout";

import { useLoaderData } from 'react-router-dom';

export default function AppLayout() {
  const {chatList} = useLoaderData();

  console.log(chatList);

  const showChat = false;
  return (
    <div className="flex">
      <div className="basis-20">
        <NavLayout />
      </div>
      <aside className="basis-96">
        <NavsContentLayout chatList={chatList} />
      </aside>
      <div className="grow">
        {showChat ? (
          <div className="flex h-screen flex-col justify-center overflow-scroll bg-slate-400">
            <div className="self-center">
              <span className="text-4xl font-bold text-teal-950">Hey!</span>
            </div>
          </div>
        ) : (
          <ChatLayout />
        )}
      </div>
    </div>
  );
}
