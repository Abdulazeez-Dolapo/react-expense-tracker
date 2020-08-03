import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { TransactionCard } from "../components/TransactionCard"
import { TransactionContext } from "../context/TransactionState"

export const AllTransactions = () => {
	const { transactions } = useContext(TransactionContext)

	return (
		<div>
			<p>
				<Link to="/">Home</Link>
			</p>
			{transactions.map(transaction => (
				<TransactionCard transaction={transaction} key={transaction.id} />
			))}
		</div>
	)
}
