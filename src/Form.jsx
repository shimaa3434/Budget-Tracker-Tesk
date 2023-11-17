import React, { useState } from 'react'

const Form = ({addTranasactions}) => {
    const [description, setDescription]= useState("")
    const[category, setCategory] = useState("income")
    const[date, setDate]= useState([])
    const [amount, setAmount] =useState(0)
   

    const handelSubmit = (e)=>{
        e.preventDefault()
        addTranasactions({
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date
        })
        setDescription("")
        setAmount(0)
        setCategory("income")
        setDate([])
        console.log(description)
        console.log(amount)
        console.log(date)
        console.log(category)
    }
    
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" className= "form-control m-1 " value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='description' required />
            <input type="number" className= "form-control m-1 " value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='amount' required />
            <input type="date" className= "form-control m-1 " value={date} onChange={(e)=> setDate(e.target.value)} placeholder='date' required />
            <select name="category" className= "form-control m-1 " value={category} onChange={(e)=> setCategory(e.target.value)} placeholder='category' required>
                <option value="income">income</option>
                <option value="expense">expense</option>
            </select>
            <button type='submit' className='btn btn-success m-1 btn-lg'>ADD</button>
        </form>
    </div>
  )
}

export default Form