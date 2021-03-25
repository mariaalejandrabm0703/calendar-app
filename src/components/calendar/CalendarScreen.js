import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { messages } from "../../helpers/calendar-messages-es";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "./CalendarEvent";

moment.locale("es");
const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Cumpleaños Oscar",
    start: moment().toDate(),
    end: moment().add(2, "hour").toDate(),
    bgcolor: "#fafafa",
    notes: "comprar el pastel",
    user: {
      uid: "123",
      name: "Maria",
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || "month");

  const onDoubleClick = (e) => {
    console.log(e);
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };
  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#3671F7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
      />
    </div>
  );
};
