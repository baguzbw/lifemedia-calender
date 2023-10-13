import React from "react";

export default function Keterangan() {
  return (
    <div>
      <p className="text-gray-500 font-bold mt-10">Keterangan</p>
      <div>
        {" "}
        <span className="inline-flex items-center rounded-md bg-red-200 px-2 mt-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-900/10">
          Tidak Disetujui
        </span>
      </div>
      <div>
        <span className="inline-flex items-center rounded-md bg-green-200 px-2 mt-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Disetujui
        </span>
      </div>
      <div>
        <span className="inline-flex items-center rounded-md bg-blue-200 px-2 mt-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Dalam Proses
        </span>
      </div>
    </div>
  );
}
