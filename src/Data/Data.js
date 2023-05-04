// Sidebar imports
import {
  UilServerAlt,
  UilAdjust,
  UilChartLine,
  UilBell,
  UilWrench,
  UilCalendarAlt,
  UilUser,
  UilSetting,
  UilComment,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilServerAlt,
    heading: "Panels",
  },
  {
    icon: UilAdjust,
    heading: "Devices",
  },
  {
    icon: UilChartLine,
    heading: 'Analytics'
  },
  {
    icon: UilBell,
    heading: 'Notifications'
  },
  {
    icon: UilWrench,
    heading: 'Repairs'
  },
  {
    icon: UilCalendarAlt,
    heading: 'Calendar'
  },
  {
    icon: UilUser,
    heading: 'Account'
  },
  {
    icon: UilSetting,
    heading: 'Settings'
  },

];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Panel 1",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 94,
    status: "EXCELLENT",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    panel: "Pro215D",
    zones: 2,
    devices: 60,
  },
  {
    title: "Panel 2",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 75,
    status: "GOOD",
    series: [
      {
        name: "Panel HP",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
    panel: "MX 4000",
    zones: 1,
    devices: 125,
  },
  {
    title: "Panel 3",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 40,
    status: "RISKY",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
    panel: "Pro32xD",
    zones: 4,
    devices: 255,
  },
];

// Recent Update Card Data
export const NotificationsData = [
  {
    img: UilComment,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
