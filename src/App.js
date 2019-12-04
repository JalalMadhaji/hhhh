import React from "react";
import "./App.css";
import FormComponent from "./FormComponent";
import TableShow from "./TableShow";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      users: []
    };
  }
  handleDelete = id => {
    let newArr = this.state.users.filter(user => id !== user.id);
    this.setState({
      users: newArr
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.length > 0) {
      this.setState({
        users: [
          ...this.state.users,
          {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            id: this.state.users.length
          }
        ]
      });
    }
  };
  render() {
    return (
      <div className="App">
        <FormComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          address={this.state.address}
        />
        <TableShow users={this.state.users} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
