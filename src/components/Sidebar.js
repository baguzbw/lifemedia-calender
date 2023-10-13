import React from "react";
import SmallCalendar from "./SmallCalendar";
// import Labels from "./Labels";
import Keterangan from "./Keterangan";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <SmallCalendar />
      <Keterangan />
      {/* <Labels /> */}
    </aside>
  );
}
