import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState = {
	transactions: JSON.parse(localStorage.getItem("transactions")) || [],
}

export const TransactionContext = createContext(initialState)

export const TransactionProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	function addTransaction(newTransaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: newTransaction,
		})
	}

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		})
	}

	return (
		<TransactionContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</TransactionContext.Provider>
	)
}
