import React from 'react'

export const ClientView = ({name, lastname, city, street, number}) => {
  return (
    <>
    <h3>Datos del cliente</h3>
        <ul className="list-group">
            <li className="list-group-item active"> {name} </li>
            <li className="list-group-item"> {lastname} </li>
            <li className="list-group-item"> {city} </li>
            <li className="list-group-item"> {street} </li>
            <li className="list-group-item"> {number} </li>
        </ul>
    </>
  )
}
