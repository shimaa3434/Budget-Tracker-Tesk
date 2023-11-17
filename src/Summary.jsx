import React from 'react'

const Summary = ({tranasactions}) => {
    const income = tranasactions.filter(i => i.category === "income").reduce((acc, item)=> acc + Number(item.amount) , 0)
    const expense = tranasactions.filter(i => i.category === "expense").reduce((acc, item)=> acc + Number(item.amount), 0)
    const balance = income - expense
  return (
    <div className='container'>
      <div className="row">
        <div className="col my-3">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body text-center">
                <p className='fs-3 fw-bolder fst-italic'>total incomes : <span className='text-success fw-bold '>{income}</span></p>
            </div>
          </div>
        </div>
        <div className="col my-3">
          <div className="card border-0 shadow rounded-3">
            <div className="card-body text-center">
              <p className='fs-3 fw-bolder fst-italic'>total expanses : <span className='text-danger fw-bold '>{expense}</span></p>
            </div>
          </div>
        </div>
        <div className="col my-3">
        <div className="card border-0 shadow rounded-3">
            <div className="card-body text-center">
              <p className='fs-3 fw-bolder fst-italic'>balance : <span className='text-primary fw-bold '>{balance}</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary