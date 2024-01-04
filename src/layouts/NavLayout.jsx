import Avatar from "../components/dataDisplay/Avatar";
import Icon from "../components/dataDisplay/Icon"
import { icons } from "../assets";

export default function NavLayout() {
  const demoProfilePic = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80";

  return (
    <nav className="flex h-screen flex-col justify-between bg-slate-200 py-3">
      <div className="flex justify-center py-3">
        <Avatar
          src={demoProfilePic}
          alt="Profile picture"
        />
      </div>
      <div className="grow py-4">
        <div className="flex justify-center py-5">
          <Icon src={icons.chat} />
        </div>
        <div className="flex justify-center py-5">
          <Icon src={icons.markChat} />
        </div>
        <div className="flex justify-center py-5">
          <Icon src={icons.addContact} />
        </div>
        <div className="flex justify-center py-5">
          <Icon src={icons.groups} />
        </div>
        <div className="flex justify-center py-5">
          <Icon src={icons.block} />
        </div>
      </div>
      <div className="flex justify-center py-4">
        <Icon src={icons.setting} alt="App setting"/>
      </div>
    </nav>
  );
}
