import s from './CreateCarForm.module.css'
import React, { useState } from 'react'

const CreateCarForm = () => {
	const [name, setName] = useState('')
	const [prise, setPrise] = useState('')
	const [image, setImage] = useState('')
	const createCar = e => {
		e.preventDefault()
		console.log({ name, prise, image })
	}

	return (
		<form className={s.form}>
			<input
				style={{ display: 'block' }}
				placeholder='Name'
				onChange={e => setName(e.target.value)}
				value={name}
			/>
			<input
				style={{ display: 'block' }}
				placeholder='Prise'
				onChange={e => setPrise(e.target.value)}
				value={prise}
			/>
			<input
				style={{ display: 'block' }}
				placeholder='Image'
				onChange={e => setImage(e.target.value)}
				value={image}
			/>
			<button className={s.btn} onClick={e => createCar(e)}>
				Create
			</button>
		</form>
	)
}

export default CreateCarForm
