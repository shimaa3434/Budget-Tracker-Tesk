import React, {  useState } from 'react'
import Edit from './Edit'

const List = ({tranasactions, deleteItem, setTranasactions}) => {
    const [updateState, setUpdateState] = useState(-1)
    const handleEdit = (id)=>{
        setUpdateState(id)
    }
   const handleUpdate =(e)=>{
    e.preventDefault()
    setUpdateState(-1)
   }
  return (
    <div className='mt-5'>
        {tranasactions.length > 0 ? (
 <form onSubmit={handleUpdate} className=''>
 <table className='table table-striped table-bordered align-middle'>
     <thead className='table-dark'>
         <tr>
         <th>id</th>
         <th>category</th>
         <th>description</th>
         <th>data</th>
         <th>amount</th>
         <th>actions</th>
         </tr>
         
     </thead>
     <tbody>
         {tranasactions.map((item, i)=> (
             updateState === item.id ? (
                 <>
                 <Edit item={item} tranasactions= {tranasactions} setTranasactions={setTranasactions}/>
                 </>
             ):(
                 <tr key={i}>
                 <td>{i+1}</td>
                 <td>{item.category}</td>
                 <td>{item.description}</td>
                 <td>{item.date}</td>
                 <td>{item.category === "income"? "+": "-"} {item.amount}</td>
                 <td>
                     <button onClick={() => handleEdit(item.id)} className='btn btn-primary m-1'>edit</button>
                     <button onClick={() => deleteItem(i)} className='btn btn-danger m-1'>delete</button>
                 </td>
             </tr>
             )
             
         ))}
         
     </tbody>
 </table>
 </form>
        ) : (
            
           <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card border-0 shadow rounded-3">
                            <div className="card-body text-center">
                                <p className='fs-3 fst-italic'>There is no information at the moment</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )}
       
    </div>
  )
}

export default List