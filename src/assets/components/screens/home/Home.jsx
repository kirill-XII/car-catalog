import CarItem from './car-item/CarItem'
import { cars as carsData } from './cars.data'
import CreateCarForm from './create-car-form/CreateCarForm'
import { useState } from 'react'

function Home() {
	const [cars, setCars] = useState(carsData)
	console.log(cars)
	return (
		<>
			<h1>Cars catalog</h1>
			<CreateCarForm setCars={setCars} />
			<div>
				{cars.map(car => (
					<CarItem key={car.id} car={car} />
				))}
			</div>
		</>
	)
}

export default Home
