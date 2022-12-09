import Converter from './Converter'

const SmallAndBig = props => {
	let password = []
	for (let i = 0; i < props; i++) {
		const digit = Math.floor(Math.random() * 62)
		password.push(digit)
	}
	const pass = Converter(password)

	return pass
}

export default SmallAndBig
