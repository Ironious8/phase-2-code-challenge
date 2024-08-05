
function Transaction({items}) {

  const listFunction= items.map((transaction)=> {
  return (
 <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
 )
 })
 
 return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr> 
    {listFunction}
     
       </tbody>
    </table>

  );
}

export default Transaction;
