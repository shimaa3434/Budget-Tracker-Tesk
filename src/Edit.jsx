import React from 'react'

const Edit = ({item, setTranasactions, tranasactions}) => {

    const handelInput = (e)=>{
        const newItem = tranasactions.map(i =>(
            i.id === item.id ? {...i, [e.target.name]: e.target.value} : i
        ))
        setTranasactions(newItem)
        
    }
  return (
    <tr>
        <td>{item.id}</td>
        <td><input type="text"  className= "form-control m-1 p-1" value={item.description} name='description' onChange={handelInput} placeholder='description' required /></td>
        <td><input type="number" className= "form-control m-1 p-1"  value={item.amount} name='amount' onChange={handelInput} placeholder='amount' required /></td>
        <td><input type="date" className= "form-control m-1 p-1"  value={item.date} name='date' onChange={handelInput} placeholder='date' required /></td>
        <td>
            <select name="category" className= "form-control m-1 p-1"  value={item.category} onChange={handelInput} placeholder='category' required>
                 <option value="income">income</option>
                 <option value="expense">expense</option>
            </select>
        </td>
        <td><button type='submit' className='btn btn-primary m-1'>Edit</button></td>
    </tr>
  )
}

export default Edit