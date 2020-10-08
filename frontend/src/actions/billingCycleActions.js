import api from "../services/api";

export function getList() {
  const request = api.get("/billing-cycles");
  return {
    type: "BILLING_CYCLE_FETCHED",
    payload: request,
  };
}
