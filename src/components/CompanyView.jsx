import React from 'react'

export const CompanyView = ({name, fiscalNumber}) => {
  return (
    <>
    <h3>Company information</h3>
        <ul className="list-group">
            <li className="list-group-item active"> {name} </li>
            <li className="list-group-item"> {fiscalNumber} </li>
        </ul>
    </>
  )
}
