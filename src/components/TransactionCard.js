import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionState"

export const TransactionCard = ({ transaction }) => {
	const { deleteTransaction } = useContext(TransactionContext)
	const sign = transaction.type === "income" ? "+" : "-"

	return (
		<>
			<button onClick={() => deleteTransaction(transaction.id)}>
				delete
			</button>
			<li>
				{transaction.description} {sign}
				{transaction.amount}
			</li>
		</>
	)
}
