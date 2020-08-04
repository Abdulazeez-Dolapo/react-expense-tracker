export const saveToLocalStorage = data => {
	localStorage.setItem("transactions", JSON.stringify(data))
}
