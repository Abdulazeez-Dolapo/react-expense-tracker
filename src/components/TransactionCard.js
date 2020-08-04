import React, { useContext } from "react"
import { TransactionContext } from "../context/TransactionState"

export const TransactionCard = ({ transaction }) => {
	const { deleteTransaction } = useContext(TransactionContext)
	const sign = transaction.type === "income" ? "+" : "-"

	return (
		<div
			className={
				transaction.type === "income"
					? "card green-border"
					: "card red-border"
			}
		>
			<div>
				<p
					className="delete"
					onClick={() => deleteTransaction(transaction.id)}
				>
					x
				</p>
				<span>{transaction.description}</span>
			</div>
			<li>
				<span className="bold">
					{sign}
					{transaction.amount}
				</span>
			</li>
		</div>
	)
}
