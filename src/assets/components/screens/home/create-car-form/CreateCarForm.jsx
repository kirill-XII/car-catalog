import s from './CreateCarForm.module.css'
import React, { useState } from 'react'

const clearData = {
	price: '',
	name: '',
	image: '',
}

const CreateCarForm = ({ setCars }) => {
	// const [name, setName] = useState('')
	// const [price, setPrise] = useState('')
	// const [image, setImage] = useState('')

	const [data, setData] = useState(clearData)

	const createCar = e => {
		e.preventDefault()

		setCars(prev => [{ id: prev.length + 1, ...data }, ...prev])
		setData(clearData)
	}

	return (
		<form className={s.form}>
			<input
				style={{ display: 'block' }}
				placeholder='Name'
				onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
				value={data.name}
			/>
			<input
				style={{ display: 'block' }}
				placeholder='Prise'
				onChange={e => setData(prev => ({ ...prev, price: e.target.value }))}
				value={data.price}
			/>
			<input
				style={{ display: 'block' }}
				placeholder='Image'
				onChange={e => setData(prev => ({ ...prev, image: e.target.value }))}
				value={data.image}
			/>
			<button className={s.btn} onClick={e => createCar(e)}>
				Create
			</button>
		</form>
	)
}

export default CreateCarForm
