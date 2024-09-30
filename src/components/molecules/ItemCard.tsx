import '../../styles/ItemCard.css'
import { formatPrice } from '../../utils'
import { IItem } from '../types'
import { Button } from '../atoms/Button'

export const ItemCard = ({ title, description, image, detail } : IItem) => {
  return (
    <article className='card-container'>
      <div className='card-content'>
        <img className='card-image' src={image} alt={title} />
        <div className='card-info'>
          <header className='card-header'>
            <h3 className='card-title'>{title}</h3>
            <h4>{detail.year}</h4>
          </header>
          <p>{description}</p>
          <h4 className='card-price'>{formatPrice(detail.price)}</h4>
          <Button label='Detalles' />
        </div>
      </div>
    </article>
  )
}