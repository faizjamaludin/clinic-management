import {
  MdOutlineDashboardCustomize,
  MdOutlineCalendarMonth,
  MdFaceUnlock,
  MdAccountCircle,
  MdOutlinePayments,
  MdOutlineContacts,
  MdOutlinePayment,
  MdOutlineBusinessCenter,
  MdOutlineChairAlt,
  MdOutlineWarehouse,
  MdOutlineWash,
} from "react-icons/md";

export const menuConfig = [
  {
    label: "New Tab",
    shortcut: "⌘T",
    action: () => console.log("New Tab"),
  },
  { label: "New Window", action: () => console.log("New Window") },
  { type: "separator" },
  { label: "Share", action: () => console.log("Share") },
  { type: "separator" },
  { label: "Print", action: () => console.log("Print") },
];

export const menuSection = [
  {
    items: [{ icon: MdOutlineDashboardCustomize, label: "Dashboard" }],
  },
  {
    title: "Clinic",
    items: [
      { icon: MdOutlineCalendarMonth, label: "Reservation" },
      { icon: MdFaceUnlock, label: "Patients" },
      { icon: MdOutlineWash, label: "Treatements" },
      { icon: MdOutlineContacts, label: "Staff List" },
    ],
  },
  {
    title: "Finance",
    items: [
      { icon: MdAccountCircle, label: "Account" },
      { icon: MdOutlinePayments, label: "Sales" },
      { icon: MdOutlineWarehouse, label: "Purchases" },
      { icon: MdOutlinePayment, label: "Payment Method" },
    ],
  },
  {
    title: "Physical Asset",
    items: [
      { icon: MdOutlineBusinessCenter, label: "Stocks" },
      { icon: MdOutlineChairAlt, label: "Peripherals" },
    ],
  },
];
