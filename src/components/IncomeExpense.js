import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionState"

export const IncomeExpense = () => {
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

	return (
		<div>
			<div>
				<span>INCOME</span>
				<span>&#8358;{totalIncome}</span>
			</div>

			<div>
				<span>EXPENSE</span>
				<span>&#8358;{totalExpense}</span>
			</div>
		</div>
	)
}
