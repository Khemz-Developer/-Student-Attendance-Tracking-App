"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import Image from "next/image";

const Header = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div className="flex justify-between p-4 shadow-sm">
      <div>

      </div>

      <div>
        {user?.picture? (
          <Image
            src={user.picture}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
