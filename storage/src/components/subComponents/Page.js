import React, { useState } from "react";
import initialProducts from "../products.json";
import List from "./List";
import Form from "./Form";
import uuid from "uuid/dist/v4"

const Page = ({ handlerLogOut,handleAlert }) => {

    const [products,setProducts] = useState(initialProducts);
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [amount,setAmount] = useState("");
    const [edit,setEdit] = useState(false);
    const [id,setId] = useState(0);

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    const handleDelete = (id) => {
        let tempProducts = products.filter((item) => item.id !== id);
        setProducts(tempProducts);
        handleAlert({ type: "danger", text: "item deleted",time:2000 });
    };
    const handleEdit = (id) => {
        let product = products.find((item) => item.id === id);
        let { name, price, amount } = product;
        setPrice(price);
        setAmount(amount);
        setName(name);
        setEdit(true);
        setId(id);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== "" && amount !== "" && amount > 0) {
            if (edit) {
                let tempProducts = products.map((item) => {
                    return item.id === id ? {...item, name, amount, price} : item;//actualizando item con nuevas propiedades
                });
                setProducts(tempProducts);
                setEdit(false);
                handleAlert({type: "success", text: "item edited",time:2000});
            } else {
                const singleProduct = { name, price, amount, id: uuid()};
                setProducts([...products, singleProduct]);
                handleAlert({type: "success", text: "item added",time: 2000});
            }
            setPrice("");
            setName("");
            setAmount("");
        } else {
            handleAlert({type: "danger", text: "charge can't be empty",time: 2000});
        }
    }

  return (
    <div>
        <main className="App">
            <Form handleSubmit={handleSubmit} amount={amount} name={name} price={price} edit={edit} handleEdit={handleEdit} handleDetele={handleDelete} handlePrice={handlePrice} handleName={handleName} handleAmount={handleAmount}/>
            <List products={products} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </main>
      <button className="btn btn-danger" onClick={handlerLogOut}>
        Log out
      </button>
    </div>
  );
};
export default Page;
