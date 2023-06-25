import React from 'react'

const Table = ({expenses}) => {
  return (
    <div className='table'>
      <table>
        <thead>
            <tr>

            </tr>
        </thead>
        <tbody>
            {
                expenses.map((expenses) => (
                    <tr key={expenses.id}></tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
