import React, { useContext } from "react"
import { TransactionCard } from "./TransactionCard"
import { TransactionContext } from "../context/TransactionState"

export const History = () => {
	const { transactions } = useContext(TransactionContext)
	const resizedTransactionArray = transactions.slice(0, 5)
	return (
		<div>
			<p>History</p>

			{resizedTransactionArray.map(transaction => (
				<TransactionCard transaction={transaction} key={transaction.id} />
			))}
		</div>
	)
}
