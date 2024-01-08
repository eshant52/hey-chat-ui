/* eslint-disable react/prop-types */
import SearchBar from "@components/input/SearchBar";
import Card from "@components/dataDisplay/ChatCard";
import { ListView, ListContent } from "@components/dataDisplay/List";

import { Link } from "react-router-dom";
import { getChatList } from "@data/index";

export async function loadChatList() {
  const chatList = await getChatList();
  return {chatList};
}

export default function NavsContentLayout({chatList}) {

  const chatListComponent = chatList.map((chat) => (
    <ListContent key={chat.id}>
      <Link to={`chats/${chat.id}`}>
      <Card
        name={chat.name}
        date={chat.time}
        recentText={chat.metaText}
        muted={chat.ismuted}
        blocked={chat.isblocked}
        read={chat.isread}
      />
      </Link>
    </ListContent>
  ));

  return (
    <div className="flex h-screen flex-col">
      <header className="">
        <div className="bg-white py-4 pl-5">
          <span className="text-xl font-bold">Chats</span>
        </div>
        <div className="px-4 py-3">
          <SearchBar />
        </div>
      </header>
      <main className="flex-1 overflow-y-scroll">
        <ListView >
          {chatListComponent}
        </ListView>
      </main>
    </div>
  );
}
