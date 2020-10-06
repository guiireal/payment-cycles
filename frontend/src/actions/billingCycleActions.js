import api from "../services/api";

export function getList() {
  const request = axios.get("/billing-cycles");
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}
