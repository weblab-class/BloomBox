import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Layout from "./components/pages/Layout/Layout";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound";
import GameCanvas from "./components/pages/GameCanvas/GameCanvas";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import Join from "./components/pages/Join/Join";
import Room from "./components/pages/Room/Room";
import Profile from "./components/pages/Profile/Profile";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login/>} />
        <Route path="game" element={<GameCanvas />}> 
          <Route index element={<MainMenu />}/>
          <Route path="join" element={<Join/>}/>
          <Route path="room/:roomId" element={<Room />}/>
          <Route path="profile/:userId" element={<Profile/>}/>
        </Route>
      </Route>
    </Route>
  )
)

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
