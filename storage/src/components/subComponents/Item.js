import React, { useState } from "react";

const Item = ({ product, handleEdit, handleDelete }) => {
  let { name, amount, price, description, id } = product;

  const [tog, setTog] = useState(false);

  const toggleDescription = () => {
    setTog(!tog);
  };

  return (
    <div>
      <li className="item" key={id} onClick={toggleDescription}>
        <div className="info">
          <span>{name}</span>
          <span className="price">${price}</span>
          <span className="amount">Cantidad:{amount}</span>
          <span className="amount">id:{id}</span>
        </div>
        <div>
          <button
            className="edit-btn"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            edit
          </button>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
        </div>
      </li>
      {tog && <div className="info description">{description}</div>}
    </div>
  );
};

export default Item;
