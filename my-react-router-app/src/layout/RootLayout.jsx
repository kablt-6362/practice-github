import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      RootLayout
      <div className="flex gap-2">
        <Link className="border-2 text-amber-300" to="/">
          루트레이아웃
        </Link>
        <Link className="border-2 text-blue-300" to="/dummy">
          더미레이아웃
        </Link>
      </div>
    </div>
  );
}
