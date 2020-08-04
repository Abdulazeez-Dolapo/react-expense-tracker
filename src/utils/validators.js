export const validateInput = (description, amount) => {
	const errors = []
	if (!description.trim()) {
		errors.push("Description should not be empty")
	}
	if (description.trim().length > 30) {
		errors.push("Description should not be more than 30 characters")
	}
	if (!amount) {
		errors.push("Please enter a valid amount")
	}
	if (amount > 9999) {
		errors.push("Amount should not exceed 9999")
	}

	return errors
}
