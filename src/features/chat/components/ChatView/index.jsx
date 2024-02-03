import ChatBox from "./ChatBox";
import ChatBoxList from "./ChatBoxList";
import { getChatConversation } from "@data/index";

const chats = await getChatConversation(1000);

export default function ChatView({ id, setMetaText, ...props}) {
  const userId = "309";

  const chatBoxList = chats.find(chat => chat.id === id).chats.map((chat) => (
    <ChatBox
      key={chat.id}
      message={chat.message}
      time={chat.timestamp.toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
      })}
      isUser={chat.fromUserId === userId}
    />
  ));

  return (
    <main {...props}>
      <div className="mx-10 my-2 min-h-10">
        <ChatBoxList>{chatBoxList}</ChatBoxList>
      </div>
    </main>
  );
}
