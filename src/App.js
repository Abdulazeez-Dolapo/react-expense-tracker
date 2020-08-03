import React from "react"

import { Header } from "./components/Header"
import { CashFlow } from "./components/CashFlow"
import { IncomeExpense } from "./components/IncomeExpense"
import { History } from "./components/History"
import { AddTransaction } from "./components/AddTransaction"

import { TransactionProvider } from "./context/TransactionState"

function App() {
	return (
		<TransactionProvider>
			<div className="app">
				<Header />
				<CashFlow />
				<IncomeExpense />
				<History />
				<AddTransaction />
			</div>
		</TransactionProvider>
	)
}

export default App
