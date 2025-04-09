import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "O nas",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Galeria",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Wycieczki",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Pricing Page",
        path: "/pricing",
        newTab: false,
      },
      {
        id: 53,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 54,
        title: "Blog Grid Page",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 55,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 56,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 57,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
