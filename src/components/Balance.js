import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionState"

export const Balance = () => {
	const { transactions } = useContext(TransactionContext)

	const totalIncome = transactions
		.filter(transaction => transaction.type === "income")
		.map(transaction => +transaction.amount)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		.toFixed(2)

	const totalExpense = transactions
		.filter(transaction => transaction.type === "expense")
		.map(transaction => +transaction.amount)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		.toFixed(2)

	const balance = totalIncome - totalExpense

	return (
		<div>
			<p>Balance</p>
			<p>&#8358;{balance}</p>
		</div>
	)
}
