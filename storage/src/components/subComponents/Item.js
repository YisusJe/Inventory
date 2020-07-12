import React from "react"

const Item = ({product,id}) => {
    const {name,amount,price} = product
    return (
        <li className="item" key={id}>
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
                    //onClick={() => handleEdit(id)}
                >
                    edit
                </button>
                <button
                    className="clear-btn"
                    aria-label="delete button"
                    //onClick={() => handleDelete(id)}
                >
                    X
                </button>
            </div>
        </li>
    )
}

export default Item;