import React from "react"

const Item = ({product}) => {
    const {name,amount,price,id} = product
    return (
        <li className="item" key={product.id}>
            <div className="info">
                <span>{name}</span>
                <span className="amount">${price}</span>
                <span className="expense">{amount}</span>
            </div>
        </li>
    )
}

export default Item;