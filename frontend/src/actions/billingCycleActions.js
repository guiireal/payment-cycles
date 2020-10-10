import api from "../services/api";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../actions/tabActions";

export function getList() {
  const request = api.get("/billing-cycles");
  return {
    type: "BILLING_CYCLE_FETCHED",
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    api
      .post("/billing-cycles", values)
      .then(() => {
        toastr.success("Sucesso", "Operação realizada com sucesso!");
        dispatch([
          resetForm("billing-cycle-form"),
          getList(),
          selectTab("tab-list"),
          showTabs("tab-list", "tab-create"),
        ]);
      })
      .catch(({ response: { data } }) => {
        data.errors.forEach((error) => {
          toastr.error("Erro", error);
        });
      });
    return {
      type: "TEMP",
      payload: true,
    };
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tab-update"),
    selectTab("tab-update"),
    initialize("billing-cycle-form", billingCycle),
  ];
}
