import React, { useContext, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader";
import EventModal from "./components/EventModal";
import Login from "./components/Login";
import Register from "./components/Register"
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <Router>
        {" "}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
