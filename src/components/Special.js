import Converter from './Converter'

const Special = props => {
	let password = []
	for (let i = 0; i < props; i++) {
		const digit = Math.floor(Math.random() * 70)
		password.push(digit)
	}
	const pass = Converter(password)

	return pass
}

export default Special
