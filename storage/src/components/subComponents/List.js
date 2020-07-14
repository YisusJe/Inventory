import React from "react";
import Item from "./Item";

const List = ({ products,handleEdit,handleDelete }) => {
  return (
    <ul className="list">
      {products.map((product) => {
          return <Item product={product} key={product.id} handleEdit={handleEdit} handleDelete={handleDelete}/>
      })}
    </ul>
  );
};

export default List;
