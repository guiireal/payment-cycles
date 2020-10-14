import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "../../actions/billingCycleActions";

import LabelAndInput from "../../common/form/LabelAndInput";

class Form extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Informe um nome"
          />
          <Field
            name="month"
            component={LabelAndInput}
            label="Mês"
            cols="12 4"
            type="number"
            placeholder="Informe o mês"
          />
          <Field
            name="year"
            component={LabelAndInput}
            label="Ano"
            type="number"
            cols="12 4"
            placeholder="Informe o ano"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

Form = reduxForm({
  form: "billing-cycle-form",
  destroyOnUnmount: false,
})(Form);

export default connect(null, mapDispatchToProps)(Form);
