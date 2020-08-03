import React from "react"
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { IncomeExpense } from "./components/IncomeExpense"

function App() {
	return (
		<div className="App">
			<Header />
			<Balance />
			<IncomeExpense />
		</div>
	)
}

export default App
