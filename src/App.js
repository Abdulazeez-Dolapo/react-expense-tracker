import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AllTransactions } from "./views/AllTransactions"
import { Home } from "./views/Home"

import { TransactionProvider } from "./context/TransactionState"

function App() {
	return (
		<TransactionProvider>
			<Router>
				<Switch>
					<Route path="/" exact component={Home}></Route>

					<Route
						path="/all-transactions"
						exact
						component={AllTransactions}
					></Route>
				</Switch>
			</Router>
		</TransactionProvider>
	)
}

export default App
