import s from '../Home.module.css'
function CarItem({ car }) {
	return (
		<div key={car.id} className={s.item}>
			<div
				className={s.image}
				style={{ backgroundImage: `url(${car.image})` }}
			/>
			<div className={s.info}>
				<h2>{car.name}</h2>
				<p>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'USD',
					}).format(car.prise)}
				</p>
				<button>Read more</button>
			</div>
		</div>
	)
}
export default CarItem
