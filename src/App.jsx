import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import AppLayout from "@layouts/AppLayout";
import PageNotFound from "@pages/error/PageNotFound";
import ChatLayout from "@layouts/ChatLayout";
import { loadChatList } from "@layouts/NavsContentLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <h1>Home</h1>,
      errorElement: <PageNotFound />,
    },
    {
      path: "login",
      element: <h1>login</h1>,
    },
    {
      path: "signup",
      element: <h1>signup</h1>,
    },
    {
      path: "chats",
      element: <AppLayout />,
      loader: loadChatList,
      children: [
        {
          path: "u/:id",
          element: <ChatLayout />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
