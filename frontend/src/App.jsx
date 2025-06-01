import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import Grok from "./components/Grok";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/home",
          element: <Feed />,
        },
        {
          path: "/grok",
          element: <Grok />
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div className="flex flex-row justify-between w-[80%] min-h-screen mx-[8%] px-2 bg-[#000000] text-gray-300 ">
        <LeftSidebar />
        <div>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </RouterProvider>
  );
};

export default App;
