import React from 'react'

export const RowItemView = ({id, product, price, quantity, invoiceHandlerDelete}) => {
  return (
    <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className="btn btn-danger" onClick={() => invoiceHandlerDelete(id)}>Delete</button></td>
        </tr>
    </>
  )
}
