
import React from "react";
import PropTypes from "prop-types";

export default function TransactionHistory({items}){

    //  ({id, type, amount, currency})= items;
    return(
        <table className="transaction-history" >
  <thead className="transaction-title">
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map((item) => (
          <tr className="dark-row" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
   
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}