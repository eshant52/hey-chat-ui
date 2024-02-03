/* eslint-disable react/prop-types */
import {
  Chat,
  MarkUnreadChatAlt,
  PersonAdd,
  Groups,
  NotificationsOff,
  Settings,
  Block,
  GroupAdd,
} from "@mui/icons-material";

import ToolTip from "@components/dataDisplay/ToolTip";
import Avatar from "@components/dataDisplay/Avatar";

export default function NavLayout() {
  const demoProfilePic =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80";

  const navIconStyle = {
    height: "1.8rem",
    width: "1.8rem"
  }

  return (
    <nav className="bg-secondary flex h-screen flex-col  justify-between px-1 py-3">
      <div className="flex justify-center py-3">
        <Avatar src={demoProfilePic} alt="Profile picture" />
      </div>
      <div className="grow space-y-2 py-6">
        <ToolTip title="Chats">
          <NavigationButtons>
            <Chat sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Unread chats">
          <NavigationButtons>
            <MarkUnreadChatAlt sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Add contact">
          <NavigationButtons>
            <PersonAdd sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Create group">
          <NavigationButtons>
            <GroupAdd sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Groups">
          <NavigationButtons>
            <Groups sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Blocked chats">
          <NavigationButtons>
            <Block sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>

        <ToolTip title="Muted chats">
          <NavigationButtons>
            <NotificationsOff sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>
      </div>
      <div>
        <ToolTip title="Settings">
          <NavigationButtons>
            <Settings sx={navIconStyle} />
          </NavigationButtons>
        </ToolTip>
      </div>
    </nav>
  );
}

function NavigationButtons({ children }) {
  return (
    <div className="flex items-center justify-center rounded-md p-4 transition  hover:cursor-pointer hover:bg-red-200 active:bg-slate-400">
      {children}
    </div>
  );
}
