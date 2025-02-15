import React from "react";

const Pizza = props => {
  const { topping, size, vegetarian } = props.pizzaData;

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.handleEditButton(props.pizzaData)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
