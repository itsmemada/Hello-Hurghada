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
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Wycieczki",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "Zwiedzanie miast",
        path: "/exploration",
        newTab: false,
      },
        {
        id: 52,
        title: "Morze Czerwone rejsy",
        path: "/cruises",
        newTab: false,
      },
      {
        id: 53,
        title: "Sahara Safari",
        path: "/sahara",
        newTab: false,
      },
      {
        id: 55,
        title: "Rozrywka arteakcje",
        path: "/entertainment",
        newTab: false,
      },
    ],
  },
];
export default menuData;
