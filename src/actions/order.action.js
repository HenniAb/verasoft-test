import axios from "axios";
export const GET_ORDERS = "GET_POSTS";

export const getOrders = () => {
  return (dispatch) => {
    return axios
      .get("https://evoteam-verasoft.github.io/data/orders.json")
      .then((res) => dispatch({ type: GET_ORDERS, payload: res.data }));
  };
};
