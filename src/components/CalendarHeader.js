import { faUser } from "@fortawesome/free-solid-svg-icons"; // You can change the icon here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className={`px-4 py-2 flex items-center justify-between`}>
      {" "}
      <div className="flex items-center">
        <img src={logo} alt="calendar" className="mr-6 w-42 h-16" />
        <button
          onClick={handleReset}
          className="border rounded py-2 px-4 mr-5"
        >
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold flex-grow">
          {" "}
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>
      </div>
      <FontAwesomeIcon
        icon={faUser}
        className="cursor-pointer text-gray-600 mx-2 w-6 h-6"
      />
    </header>
  );
}
