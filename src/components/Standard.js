import Converter from './Converter'

const Standard = props => {
	let password = []
	for (let i = 0; i < props; i++) {
		const digit = Math.floor(Math.random() * 36)
		password.push(digit)
	}
	const pass = Converter(password)

	return pass
}

export default Standard
