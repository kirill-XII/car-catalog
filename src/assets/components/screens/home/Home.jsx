import s from './Home.module.css'
import { cars } from './cars.data'
function Home() {
	return (
		<>
			<h1>Cars catalog</h1>
			<div>
				{cars.map(car => (
					<div key={car.id} className={s.item}>
						<div
							className={s.image}
							style={{ backgroundImage: `url(${car.image})` }}
						/>
						<div className={s.info}>
							<h2>Car 1</h2>
							<p>$100 000</p>
							<button>Read more</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Home
