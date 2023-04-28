import React, { useState } from "react";
import LineOrder from "./LineOrder";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const TableOrders = () => {
  const getOrders = useSelector((state) => state.orderReducer);
  const [showSent, setShowSent] = useState(true);
  const [isWaiting, setIsWaiting] = useState(true);
  const [orderBy, setOrderBy] = useState();

  const errorDisplay = () => {
    const timer = setTimeout(() => {
      setIsWaiting(false);
      return () => clearTimeout(timer);
    }, [2000]);
    setIsWaiting(true);
  };

  const tableOrder = [
    "Date & time",
    "Subject",
    "Communication type",
    "Order #",
  ];

  return (
    <div className="table-orders">
      <div className="header-table-orders">
        <div className="order-state">
          <input
            type="radio"
            name="header"
            id="sent"
            defaultChecked={true}
            onChange={() => setShowSent(true)}
          />
          <label htmlFor="sent">sent</label>
        </div>

        <div className="order-state">
          <input
            type="radio"
            name="header"
            id="error"
            onChange={() => setShowSent(false) & errorDisplay()}
          />
          <label htmlFor="error">errors</label>
        </div>

        <div className="reecent-order-state">
          <p>recent orders</p>
        </div>
      </div>
      {showSent && (
        <div className="table-container">
          <ul className="table-header">
            {tableOrder.map((type) => (
              <li>
                <input
                  type="radio"
                  name="header-time"
                  id={type}
                  defaultChecked={
                    type === orderBy || type === orderBy + "reverse"
                      ? true
                      : false
                  }
                  onClick={() => {
                    if (orderBy === type) {
                      setOrderBy(type + "reverse");
                    } else {
                      setOrderBy(type);
                    }
                  }}
                />
                <label htmlFor={type}>{type.toUpperCase()}</label>
              </li>
            ))}
          </ul>

          {!isEmpty(getOrders) &&
            getOrders.orders_AAA.sent
              .sort((a, b) => {
                switch (orderBy) {
                  case "Date & time":
                    return b.id - a.id;
                  case "Date & timereverse":
                    return a.id - b.id;

                  case "Communication type":
                    return b.type - a.type;
                  case "Communication typereverse":
                    return a.type - b.type;

                  case "Subject":
                    return b.id - a.id;
                  case "Subjectreverse":
                    return a.id - b.id;

                  case "Order #":
                    return b.order_id - a.order_id;
                  case "Order #reverse":
                    return a.order_id - b.order_id;

                  default:
                    return null;
                }
              })
              .map((order) => <LineOrder order={order} key={order.id} />)}
        </div>
      )}

      {!showSent && (
        <div className="table-container-error">
          <div className="items">
            {isWaiting && (
              <p>
                <i class="fa-solid fa-circle fa-fade"></i>
                <i class="fa-solid fa-circle fa-fade"></i>
                <i class="fa-solid fa-circle fa-fade"></i>
              </p>
            )}
            {!isWaiting && <p>No Items</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TableOrders;
