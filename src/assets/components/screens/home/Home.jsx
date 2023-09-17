import CarItem from './car-item/CarItem'
import { cars } from './cars.data'
import CreateCarForm from './create-car-form/CreateCarForm'

function Home() {
	return (
		<>
			<h1>Cars catalog</h1>
			<CreateCarForm />
			<div>
				{cars.map(car => (
					<CarItem key={car.id} car={car} />
				))}
			</div>
		</>
	)
}

export default Home
