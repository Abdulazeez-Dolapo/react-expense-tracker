import React from "react"
import { TransactionCard } from "./TransactionCard"

export const History = () => {
	const arr = [1, 2, 3, 4]
	return (
		<div>
			<p>History</p>

			{arr.map(a => (
				<TransactionCard key={a} />
			))}
		</div>
	)
}
