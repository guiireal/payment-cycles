import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import tabReducer from "./tabReducer";
import billingCycleReducer from "./billingCycleReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
});

export default rootReducer;
