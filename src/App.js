import React, { useRef, useState } from 'react'
import Pin from './components/Pin'
import Standard from './components/Standard'

import classes from './App.module.css'
import SmallAndBig from './components/SmallAndBig'
import Special from './components/Special'

function App() {
	const [pass, setPass] = useState([])
	const selectRef = useRef()
	const lengthRef = useRef()
	let password = []

	const submitHandler = event => {
		event.preventDefault()
		const selectValue = selectRef.current.value
		const lengthValue = lengthRef.current.value
		if (selectValue === 'pin') {
			password = Pin(lengthValue)
		}
		if (selectValue === 'standard') {
			password = Standard(lengthValue)
		}
		if (selectValue === 'smallAndBig') {
			password = SmallAndBig(lengthValue)
		}
		if (selectValue === 'special') {
			password = Special(lengthValue)
		}
		setPass(password)
	}

	return (
		<div className={classes.app}>
			<p>Generator haseł</p>
			<form className={classes.form} onSubmit={submitHandler}>
				<label htmlFor='select'>Wybierz rodzaj hasła</label>
				<select id='select' name='select' ref={selectRef}>
					<option value='pin'>PIN (same cyfry)</option>
					<option value='standard'>Bez znaków specjalnych (litery + cyfry)</option>
					<option value='smallAndBig'>Bez znaków specjalnych (małe i duże litery + cyfry)</option>
					<option value='special'>Ze znakami specjalnymi (+ !@#$^&*)</option>
				</select>
				<label htmlFor='length'>Wybierz długość hasła (1 - 20 znaków)</label>
				<input id='length' type='number' min='1' max='20' ref={lengthRef} />
				<button>Generuj hasło</button>
			</form>
			<div className={classes.passwordBox}>
				<p>Twoje hasło to:</p>
				<p>{pass}</p>
			</div>
		</div>
	)
}

export default App
