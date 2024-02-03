/* eslint-disable react/prop-types */
import { getChatList } from "@data/index";
import List, {ListContent} from "@components/dataDisplay/List";
import ChatCard from "@features/chat/components/ChatCard";

const chatsList = await getChatList(3000);

export default function ChatList({ setId, userId="309", setMetaText}) {
  
  const chatListComponent = chatsList.find(chat=>chat.userId === userId).list.map((chat) => (
    <ListContent key={chat.id}>
      <ChatCard
        dp={chat.dp}
        name={chat.name}
        date={chat.time}
        recentText={chat.metaText}
        muted={chat.ismuted}
        blocked={chat.isblocked}
        read={chat.isread}
        onClick={() => setId(chat.chatId)}
      />
    </ListContent>
  ));

  return <List className="divide-y-[0.1rem]" >{chatListComponent}</List>;
}
