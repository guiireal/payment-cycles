import api from "../services/api";

export function getSummary() {
  const request = api.get("/billing-cycles/summary");
  return {
    type: "BILLING_SUMMARY_FETCHED",
    payload: request,
  };
}
