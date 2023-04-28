import React from "react";

const LineOrder = ({ order }) => {
  const timeFormater = (time) => {
    const [hourString, minute] = time.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
  };

  const dateFormater = (date) => {
    let days = ["Sund", "Mond", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newDate = new Date(date);

    return (
      days[newDate.getDay()] +
      ", " +
      months[newDate.getMonth()] +
      " " +
      newDate.getDate()
      // + " " + // newDate.getFullYear()
    );
  };

  return (
    <div className="lines">
      <div className="table-line">
        <p>
          {dateFormater(order.sent_dt)}
          <br />
          <span>{timeFormater(order.sent_tm)}</span>
        </p>
        <p>
          {order.subject.title}
          <br />
          <span>{order.subject.email}</span>
        </p>
        <p>
          <span> {order.type} </span>
        </p>
        <p>
          <span>{order.order_id} </span>
        </p>
        <button>Resend</button>
      </div>
    </div>
  );
};

export default LineOrder;
