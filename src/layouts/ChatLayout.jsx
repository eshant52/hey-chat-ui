/* eslint-disable react/prop-types */
import { Header, ChatView, Footer } from "@features/chat";

export default function ChatLayout({id, metaText}) {
  let dp;
  return (
    <div className="box-border flex h-screen min-w-min flex-col">
      <Header dp={dp} className="header-height bg-secondary px-3 py-2.5" />
      <ChatView className="order-2 flex-auto overflow-y-scroll scroll-smooth bg-topography" id={id} metaText={metaText}/>
      <Footer className="footer-height bg-secondary order-3 flex flex-shrink-0 flex-grow-0 basis-auto items-center justify-evenly px-3 py-2" />
    </div>
  );
}
