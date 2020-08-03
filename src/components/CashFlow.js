import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionState"

export const CashFlow = () => {
	const { transactions } = useContext(TransactionContext)

	const totalCashFlow = transactions
		.map(transaction => +transaction.amount)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		.toFixed(2)

	return (
		<div>
			<p>Total Cash flow</p>
			<p>&#8358;{totalCashFlow}</p>
		</div>
	)
}
