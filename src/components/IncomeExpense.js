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
		<div className="income-expense">
			<div className="income">
				<div className="center">
					<p>INCOME</p>
					<p className="green">&#8358;{totalIncome}</p>
				</div>
			</div>

			<div className="line"></div>

			<div className="income">
				<div className="center">
					<p>EXPENSE</p>
					<p className="error">&#8358;{totalExpense}</p>
				</div>
			</div>
		</div>
	)
}
