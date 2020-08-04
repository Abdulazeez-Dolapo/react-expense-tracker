import React, { useState, useContext } from "react"
import { validateInput } from "../utils/validators"
import { TransactionContext } from "../context/TransactionState"

export const AddTransaction = () => {
	const { addTransaction } = useContext(TransactionContext)

	const [description, setDescription] = useState("")
	const [amount, setAmount] = useState("")
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
			amount: +amount,
			description,
			type: transactionType,
		}

		addTransaction(newTransaction)
		resetForm()
	}

	// Display errors from form validation
	const errorDisplay = errors.map((error, index) => {
		return (
			<p className="error message" key={index}>
				{" "}
				{error}{" "}
			</p>
		)
	})

	return (
		<div>
			<p>Add a new transaction</p>
			<div className="divider"></div>

			<form onSubmit={addNewTransaction}>
				<label>Description</label>
				<input
					type="text"
					name="description"
					value={description}
					label="Description"
					placeholder="Enter description"
					onChange={e => setDescription(e.target.value)}
				/>

				<label>Amount</label>
				<input
					type="number"
					name="amount"
					value={amount}
					label="Amount"
					placeholder="Enter amount"
					onChange={e => setAmount(e.target.value)}
				/>

				<label>Transaction Type</label>
				<select
					name="Type"
					selected={transactionType}
					label="Type"
					onChange={e => setTransactionType(e.target.value)}
				>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>

				<div className="message-display">{errorDisplay}</div>

				<button>Add Transaction</button>
			</form>
		</div>
	)
}
