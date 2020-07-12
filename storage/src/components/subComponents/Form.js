import React from "react"

const Form = ({handleSubmit,name, edit,amount,price, handleEdit, handleDetele, handlePrice, handleName, handleAmount}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="e.g. cookies"
                        value={name}
                        onChange={handleName}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="text"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 3"
                        value={amount}
                        onChange={handleAmount}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        placeholder="e.g. 1000$"
                        value={price}
                        onChange={handlePrice}
                    ></input>
                </div>

            <div className="form-group">
                <button type="submit" className="btn btn-submit">
                    {edit ? "edit" : "submit"}
                </button>
            </div>
            </div>
        </form>
    )
}

export default Form;