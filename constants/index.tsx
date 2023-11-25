import { MdSpaceDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import { MdArticle } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";

export const homeNavs = [
  { id: 1, name: "HOME", route: "/" },
  { id: 2, name: "BLOG", route: "/blog" },
];
export const topics = [
  { id: 3, name: "PODCASTS", route: "/podcasts" },
  { id: 4, name: "BOOK RVW", route: "/books" },
  { id: 5, name: "COURSES", route: "/courses" },
  { id: 6, name: "CASE STUDIES", route: "/case-studies" },
  { id: 7, name: "NEWS'N UPDATES", route: "/updates" },
  { id: 8, name: "WEBINARS", route: "/webinars" },
];
export const DashboardNavs = [
  { id: 1, name: "Home", route: "/", icon: <GoHomeFill /> },
  {
    id: 2,
    name: "Dasboard",
    route: "/admin/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    id: 3,
    name: "Statistics",
    route: "/admin/dashboard/statistics",
    icon: <ImStatsDots />,
  },
  {
    id: 4,
    name: "Book Reviews",
    route: "/admin/dashboard/book-reviews",
    icon: <IoBookSharp />,
  },
  {
    id: 5,
    name: "Blogs",
    route: "/admin/dashboard/blogs",
    icon: <MdArticle />,
  },
  {
    id: 6,
    name: "Users",
    route: "/admin/dashboard/users",
    icon: <PiUsersThreeLight />,
  },
];
