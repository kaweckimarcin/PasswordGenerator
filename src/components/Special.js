import { useState } from 'react'
import Converter from './Converter'

const Special = props => {
	let password = []
	let pass = []

	for (let i = 0; i < props; i++) {
		const digit = Math.floor(Math.random() * 70)
		password.push(digit)
	}

	pass = Converter(password)

	return pass
}

export default Special
