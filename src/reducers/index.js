import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import orderReducer from "./order.reducer";

export default combineReducers({
  userReducer,
  orderReducer,
});
