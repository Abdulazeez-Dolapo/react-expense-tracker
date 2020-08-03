import React, { useState, useContext } from "react"
import { validateInput } from "../utils/validators"
import { TransactionContext } from "../context/TransactionState"

export const AddTransaction = () => {
	const { addTransaction, transactions } = useContext(TransactionContext)

	const [description, setDescription] = useState("")
	const [amount, setAmount] = useState(0)
	const [transactionType, setTransactionType] = useState("income")
	const [errors, setErrors] = useState([])

	const resetForm = () => {
		setDescription("")
		setAmount(0)
		setErrors([])
	}

	// Add a new transaction
	const addNewTransaction = event => {
		event.preventDefault()
		setErrors([])

		const validation = validateInput(description, amount)
		if (validation.length > 0) {
			return setErrors(validation)
		}

		const newTransaction = {
			id: Math.random().toString(16).slice(2, -1),
			amount,
			description,
			type: transactionType,
		}

		addTransaction(newTransaction)
		console.log(transactions)
		resetForm()
	}

	// Display errors from form validation
	const errorDisplay = errors.map(error => {
		return (
			<ul>
				<li key={error}> {error} </li>
			</ul>
		)
	})

	return (
		<div>
			<p>Add a new transaction</p>

			<form onSubmit={addNewTransaction}>
				<input
					type="text"
					name="description"
					value={description}
					label="Description"
					placeholder="Enter description"
					onChange={e => setDescription(e.target.value)}
				/>
				<input
					type="number"
					name="amount"
					value={amount}
					label="Amount"
					placeholder="Enter amount"
					onChange={e => setAmount(e.target.value)}
				/>
				<select
					name="Type"
					selected={transactionType}
					label="Type"
					onChange={e => setTransactionType(e.target.value)}
				>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>

				<button>Add Transaction</button>
			</form>

			{errorDisplay}
		</div>
	)
}
