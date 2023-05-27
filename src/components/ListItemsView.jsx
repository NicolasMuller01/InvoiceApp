import React from 'react'
import { RowItemView } from './RowItemView'

export const ListItemsView = ({items}) => {
  return (
    <>
      <h4>Invoice products</h4>
      <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({id, product, price, quantity}) => (

              <RowItemView key={id} product={product} price={price} quantity={quantity}></RowItemView>

            ))}
          </tbody>
      </table>
    </>
  )
}
