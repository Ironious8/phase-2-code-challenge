import React from "react";
import Transaction from "./Transaction";
function TransactionsList({items}) {
  return(
   <Transaction items={items}/>
   )
}

export default TransactionsList;
