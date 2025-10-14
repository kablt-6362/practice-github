import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

export default function RootLayout() {
  return (
    <div>
      RootLayout
      <div className="flex gap-2">
        <Link className="border-2 text-amber-300" to={PATHS.ROOT.INDEX}>
          루트레이아웃
        </Link>
        <Link className="border-2 text-blue-300" to={PATHS.DUMMY.INDEX}>
          더미레이아웃
        </Link>
      </div>
    </div>
  );
}
