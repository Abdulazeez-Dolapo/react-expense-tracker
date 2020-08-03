import React from "react"

export const TransactionCard = ({ transaction }) => {
	const sign = transaction.type === "income" ? "+" : "-"
	return (
		<li>
			{transaction.description} {sign}
			{transaction.amount}
		</li>
	)
}
