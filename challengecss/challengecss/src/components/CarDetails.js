import styles from './CarDetails.module.css'

const CarDetails = ( {marca, ano, cor} ) => {
  return (
    <div>
        <ul>
            <h3>{marca}</h3>
            <li className={styles.lista}>Ano: {ano}</li>
            <li className={styles.lista}>Cor: {cor}</li>
        </ul>
    </div>
  )
}


export default CarDetails