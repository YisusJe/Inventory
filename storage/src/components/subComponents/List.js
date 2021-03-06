import React from "react";
import Item from "./Item";

const List = ({ products }) => {
  return (
    <ul className="list">
      {products.map((product,id) => {
          return <Item product={product} key={id}/>
      })}

    </ul>
  );
};

export default List;
