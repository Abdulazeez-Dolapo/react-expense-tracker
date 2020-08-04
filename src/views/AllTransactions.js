import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { TransactionCard } from "../components/TransactionCard"
import { TransactionContext } from "../context/TransactionState"

export const AllTransactions = () => {
	const { transactions } = useContext(TransactionContext)
	let displayTransactions

	if (transactions.length > 0) {
		displayTransactions = transactions.map(transaction => (
			<TransactionCard transaction={transaction} key={transaction.id} />
		))
	} else {
		displayTransactions = <p>You have not made any transactions</p>
	}

	return (
		<div className="all-transactions">
			<p>
				<Link to="/">Home</Link>
			</p>
			<h2>All Transactions</h2>
			{displayTransactions}
		</div>
	)
}
