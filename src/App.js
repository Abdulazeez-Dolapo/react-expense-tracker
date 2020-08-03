import React from "react"
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { IncomeExpense } from "./components/IncomeExpense"
import { History } from "./components/History"
import { AddTransaction } from "./components/AddTransaction"

function App() {
	return (
		<div className="App">
			<Header />
			<Balance />
			<IncomeExpense />
			<History />
			<AddTransaction />
		</div>
	)
}

export default App
