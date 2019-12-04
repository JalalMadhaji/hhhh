import React from "react";

const FormComponent = props => {
  return (
    <fieldset>
      <legend>New User</legend>
      <form onSubmit={props.handleSubmit} autoComplete="off">
        <input
          name="name"
          value={props.name}
          onChange={props.handleChange}
          placeholder="name"
        />
        <input
          name="email"
          value={props.email}
          onChange={props.handleChange}
          placeholder="Email"
        />
        <input
          name="address"
          value={props.address}
          onChange={props.handleChange}
          placeholder="Address"
        />
        <button>Save</button>
      </form>
    </fieldset>
  );
};

export default FormComponent;
