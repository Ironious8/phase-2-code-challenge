import React, {useState} from "react";

function AddTransactionForm() {

const [date, setDate]=useState('')
const[description, setDescription]=useState('')
const[category, setCategory]=useState('')
const[amount, setAmount]=useState('')

const handleSubmit= (event) => {
  event.preventDefault();

fetch('http://localhost:8001/transactions', {
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify({date, description, category, amount}),
})

.then(response=>response.json())
.then(data=>{
  setDate('')
  setDescription('')
  setCategory('')
  setAmount('')

 })
}



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={(event)=>setDescription(event.target.value)} />
          <input type="text" name="category" placeholder="Category" value={category} onChange={(event)=>setCategory(event.target.value)} />
          <input type="number" name="amount" placeholder="Amount" value={amount} onChange={(event)=>setAmount(event.target.value)} step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
