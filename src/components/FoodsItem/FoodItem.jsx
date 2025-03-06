import style from './FoodItem.module.css'
const FoodItem = ({food}) => {

    return (
        <li className={style.foodItem}>
            <h2>{food.name}</h2>
            <p>{food.prise}</p>
            <p>{food.subtitle}</p>
            <img src={food.imgUrl} alt="Think just" />
        </li>
    )
}
export default FoodItem;