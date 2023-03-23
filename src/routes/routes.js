import Favorite from "../components/favorite/favorite.tsx";
import Home from "../components/home/home.tsx";
import Profile from "../components/profile/profile.tsx";

const home = "/";
const favorite = "/favorite";
const profile = "/profile";

export const routes = [
  {
    path: home,
    element: <Home />,
  },
  { path: favorite, 
    element: <Favorite />
  },
  {
    path: profile,
    element: <Profile />,
  },
];
