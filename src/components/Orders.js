import React from "react";
import TableOrders from "./TableOrders";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Orders = () => {
  const ordersType = useSelector((state) => state.orderReducer);
  let divName = "";

  return (
    <>
      <div className="orders-filters">
        <div className="orders-filters-container">
          {!isEmpty(ordersType) &&
            Object.entries(ordersType).map((type) => (
              <div
                className={
                  type[0] === "orders_AAA"
                    ? (divName = "orderType active")
                    : (divName = "orderType")
                }
              >
                <p>{type[0].replace("_", " ")}</p>
              </div>
            ))}
        </div>
      </div>

      <TableOrders />
    </>
  );
};

export default Orders;
