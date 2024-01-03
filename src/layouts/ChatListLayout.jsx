import { icons } from "../assets";
import SearchBar from "../components/SearchBar";
import Card from "../components/dataDisplay/Card";
import { ListView, ListContent } from "../components/dataDisplay/List";

export default function ChatListLayout() {
  return (
    <div className="flex h-screen flex-col bg-slate-300">
      <header className="">
        <div className="bg-white py-4 pl-5">
          <span className="text-xl font-bold">Chats</span>
        </div>
        <div className="py-3">
          <SearchBar />
        </div>
      </header>
      <main className="flex-1 overflow-y-scroll">
        <ListView>
          <ListContent>
            <Card
              dp={icons.person}
              name="Eshant Sonune"
              date="now"
              recentText="Something nothing more bla bla bla bla bla bla"
              muted={false}
              blocked={false}
            />
          </ListContent>
        </ListView>
      </main>
    </div>
  );
}
