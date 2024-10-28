"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideNav = () => {
  const { user } = useKindeBrowserClient();
  console.log(user);
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutIcon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="h-screen p-5 border shadow-md">
      <Image src={"/logo.svg"} width={180} height={50} alt="logo" />

      <hr className="my-5" />
      {menuList.map((menu, index) => (
        <h2
          key={index}
          className="flex gap-3 p-4 rounded-lg text-md text-slate-500 hover:bg-primary hover:text-white hover:cursor-pointer"
        >
          <menu.icon />
          {menu.name}
        </h2>
      ))}

      <div className="fixed flex items-center gap-2 p-2 bottom-5">
        {user?.picture ? (
          <Image
            src={user.picture}
            width={35}
            height={35}
            alt="User"
            className="rounded-full"
          />
        ) : (
          <div className="bg-gray-300 rounded-full w-9 h-9"></div> // Fallback in case of no image
        )}
        <div>
            <h2 className="text-sm font-bold">{user?.given_name} {user?.family_name}</h2>
            <h2 className="text-xs text-slate-400">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
