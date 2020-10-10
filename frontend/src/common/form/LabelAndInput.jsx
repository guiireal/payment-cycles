import React from "react";
import Grid from "../layout/Grid";

export default ({
  cols,
  name,
  label,
  placeholder,
  readOnly,
  type,
  ...props
}) => (
  <Grid cols={cols}>
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...props.input}
        className="form-control"
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
      />
    </div>
  </Grid>
);
