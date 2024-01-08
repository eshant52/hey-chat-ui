import {Header, ChatView, Footer} from "@features/chat";


export default function ChatLayout() {
  let dp;
  return (
    <div className="flex h-screen min-w-min flex-col bg-slate-400">
      <Header dp={dp}/>
      <ChatView />
      <Footer />
    </div>
  );
}
