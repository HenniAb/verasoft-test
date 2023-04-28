import axios from "axios";
export const GET_USER = "GET_USER";

export const getUser = () => {
  return (dispatch) => {
    return axios
      .get("https://evoteam-verasoft.github.io/data/summary.json")
      .then((res) => dispatch({ type: GET_USER, payload: res.data }));
  };
};
