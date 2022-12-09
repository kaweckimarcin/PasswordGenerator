const Pin = props => {
	let password = []
	for (let i = 0; i < props; i++) {
		const digit = Math.floor(Math.random() * 10)
		password.push(digit)
	}

	return password
}

export default Pin
