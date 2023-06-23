import React from "react";


function Budget() {
  return (
    <div className=''>
      <h2>Enter Your Income/ Budget</h2>
      <p>Please set your income/budget in the appropriate fields</p>
      <div>
        <h3>Enter your budget</h3>
        <form action="">
            <input type="text" />
            <button>Set Budget</button>
        </form>
      </div>
      <div>
        <hr/>
          <h2>Add a Source of Income</h2>
          <p>An additional income</p>
          <form action="">
            <input type="text" placeholder='Eg. 2000'/>   
            <button>Set Budget</button>
          </form>
      </div>
      <hr/>
      <div>
        <button>Reset budget</button>
      </div>
    </div>
  )
}

export default Budget
