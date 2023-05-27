import React from 'react'

export const TotalView = ({total}) => {
  return (
    <div className="text-end p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
        <h3>Total ${total}</h3>
    </div>
  )
}
