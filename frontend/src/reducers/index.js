import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
