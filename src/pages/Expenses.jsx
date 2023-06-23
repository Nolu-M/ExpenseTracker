import React from 'react'

function Expenses() {
  return (
    <div>
        <h2>Add an Expense</h2>
        <p>Add to your current expenses</p>
        <div>
            <form className='add-expense'action="">
                <input type="text" />
                <input type="text" />
            </form>
        </div>
        <div>
            <h3>Select a Category</h3>
            <select name="Categories" id="catergories">
                <option value="">Entertainment</option>
                <option value="">Transportation</option>
                <option value="">Food</option>
                <option value="">Utilities</option>
                <option value="">Housing</option>
                <option value="">Healthcare</option>
                <option value="">Others</option>
            </select>
            <button>Add Expense</button>
            <button>Remove Category</button>
        </div>
        <h2>Reset Expenses</h2>
        <p>Resets expenses</p>
        <button className='reset-exp'>Reset Expenses</button>
    </div>
  )
}

export default Expenses