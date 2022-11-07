import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const NavigationDrawer = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="sticky top-[5rem] m-4 ml-8 flex flex-col gap-1 dark:text-slate-500 text-slate-700">
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? "dark:bg-blue-700 bg-blue-500 text-white rounded" : ""
        }
      >
        <div className="dark:hover:bg-blue-700 hover:bg-blue-500 hover:text-white p-2 rounded">
          <HomeRoundedIcon sx={{ fontSize: 32 }} />
          <span className="ml-2">Home</span>
        </div>
      </NavLink>
      <NavLink
        to="Editorial"
        className={({ isActive }) =>
          isActive ? "dark:bg-blue-700 bg-blue-500 text-white rounded" : ""
        }
      >
        <div className="dark:hover:bg-blue-700 hover:bg-blue-500 hover:text-white p-2 rounded">
          <ExploreIcon sx={{ fontSize: 32 }} />
          <span className="ml-2">Editorial</span>
        </div>
      </NavLink>
      <NavLink
        to="bookmark"
        className={({ isActive }) =>
          isActive ? "dark:bg-blue-700 bg-blue-500 text-white rounded" : ""
        }
      >
        <div className="dark:hover:bg-blue-700 hover:bg-blue-500 hover:text-white p-2 rounded">
          <BookmarkIcon sx={{ fontSize: 32 }} />
          <span className="ml-2">Bookmark</span>
        </div>
      </NavLink>
      <NavLink
        to={`profile/${user.username}`}
        className={({ isActive }) =>
          isActive ? "dark:bg-blue-700 bg-blue-500 text-white rounded" : ""
        }
      >
        <div className="dark:hover:bg-blue-700 hover:bg-blue-500 hover:text-white p-2 rounded">
          <PersonIcon sx={{ fontSize: 32 }} />
          <span className="ml-2">Profile</span>
        </div>
      </NavLink>
    </div>
  );
};

export { NavigationDrawer };
