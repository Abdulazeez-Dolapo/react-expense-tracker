import { saveToLocalStorage } from "../utils/localStorage"

export default (state, { payload, type }) => {
	let transactions
	switch (type) {
		case "ADD_TRANSACTION":
			transactions = [payload, ...state.transactions]
			saveToLocalStorage(transactions)
			return {
				...state,
				transactions,
			}

		case "DELETE_TRANSACTION":
			transactions = state.transactions.filter(
				transaction => transaction.id !== payload
			)
			saveToLocalStorage(transactions)
			return {
				...state,
				transactions,
			}

		default:
			return state
	}
}
