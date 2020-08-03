export const validateInput = (description, amount) => {
	const errors = []
	if (!description.trim()) {
		errors.push("Description should not be empty")
	}
	if (!amount) {
		errors.push("Please enter a valid amount")
	}

	return errors
}
