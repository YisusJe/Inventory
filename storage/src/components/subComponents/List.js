import React from "react";
import Item from "./Item";

const List = ({ products, handleEdit, handleDelete, text, filtProducts }) => {
  return (
    <div>
      {text === "" ? (
        <ul className="list">
          {products.map((product) => {
            return (
              <Item
                product={product}
                key={product.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="list">
          {filtProducts.map((product) => {
            return (
              <Item
                product={product}
                key={product.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
