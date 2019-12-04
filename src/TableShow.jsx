import React from "react";

export default function TableShow(props) {
  return (
    <fieldset>
      <legend>Users</legend>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => props.handleDelete(user.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Users Yet!</td>
            </tr>
          )}
        </tbody>
      </table>
    </fieldset>
  );
}
