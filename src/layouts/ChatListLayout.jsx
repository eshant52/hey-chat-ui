import { icons } from "../assets";
import SearchBar from "../components/SearchBar";
import Card from "../components/dataDisplay/Card";
import { ListView, ListContent } from "../components/dataDisplay/List";

export default function ChatListLayout() {
  return (
    <div className="flex h-screen flex-col">
      <header className="">
        <div className="bg-white py-4 pl-5">
          <span className="text-xl font-bold">Chats</span>
        </div>
        <div className="py-3 px-4">
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
              read={true}
            />
          </ListContent>
          <ListContent>
            <Card
              dp={icons.person}
              name="rohit"
              date="2 days ago"
              recentText="Something nothinla bla bla"
              muted={true}
              blocked={true}
              read={true}
            />
          </ListContent>
          <ListContent>
            <Card
              dp={icons.person}
              name="Mammi"
              date="11/2/22"
              recentText="Something sf"
              muted={false}
              blocked={false}
              read={true}
            />
          </ListContent>
        </ListView>
      </main>
    </div>
  );
}
