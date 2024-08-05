import React, {useState, useEffect} from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';


function AccountContainer() {
  const [transactions, setTransactions]=useState([]);
  const[search, setSearch]=useState('');
 
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then(response=>response.json())
    .then(data=>setTransactions(data))
  }, [])

  function searchFunction(event){
   setSearch(event.target.value);
   }
  const filterTransactions=transactions.filter((item)=> {
    if(item.category===search) {
      return item
    }
    else if(search==='') {
      return true;
    }
  })
  




  return (
    <div>
      <Search searchFn={searchFunction}/>
      <AddTransactionForm/>
      <TransactionsList items={filterTransactions}/>
    </div>
  );
}

export default AccountContainer;
