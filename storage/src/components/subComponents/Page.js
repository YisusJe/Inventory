import React, { useState } from "react";
import products from "../products.json";
import List from "./List";
import Form from "./Form";

const Page = ({ handlerLogOut }) => {
  return (
    <div>
      <Form />
      <List products={products} />
      <button className="btn btn-danger" onClick={handlerLogOut}>
        Log out
      </button>
    </div>
  );
};

export default Page;
