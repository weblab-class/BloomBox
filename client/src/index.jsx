import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Layout from "./components/pages/Layout";
import Welcome from "./components/pages/Welcome";
import NotFound from "./components/pages/NotFound";
import GameCanvas from "./components/pages/GameCanvas";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "884615792154-63asahc9uepm1aflp9rvq7sq12pm1cg8.apps.googleusercontent.com";
const SPOTIFY_CLIENT_ID = "95cd44000f4c4fcc8e52ebe419beaefa";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="Game" element={<GameCanvas />} />
      </Route>
    </Route>
  )
)

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
