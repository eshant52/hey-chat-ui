/* eslint-disable react/prop-types */
import Spinner from "@components/Spinner";
import SearchBar from "@components/input/SearchBar";
import { Suspense, lazy } from "react";
const ChatList = lazy(()=>import("@features/chat/components/ChatList"));

export default function NavsContentLayout({setChatId}) {
  return (
    <div className="flex h-screen flex-col divide-y-2 divide-accent1">
      <header className="flex flex-col bg-secondary space-y-4">
        <div className="flex items-center pt-4  pl-5 bg-secondary">
          <span className="text-xl font-bold text-font-primary">Chats</span>
        </div>
        <div className="px-4 pb-4 bg-secondary">
          <SearchBar />
        </div>
      </header>
      <main className="flex-1 overflow-y-scroll bg-primary">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center space-x-2 py-4">
              <Spinner />
            </div>
          }
        >
          <ChatList setId={setChatId}/>
        </Suspense>
      </main>
    </div>
  );
}
