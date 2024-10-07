import '../../styles/ItemCard.css'
import { formatPrice } from '../../utils'
import { IItem } from '../types'
import { Button } from '../atoms/Button'


export const ItemCard = ({ id, title, description, image, detail, itemRef, onClick } : IItem & { onClick: ({ id }: { id: number }) => void, itemRef: ((node: HTMLElement) => void) | null } ) => {
  const handleClick = () => {
    onClick({ id })
  }

  return (
    <article className='card-container' ref={itemRef}>
      <div className='card-content'>
        <img className='card-image' src={image} alt={title} />
        <div className='card-info'>
          <header className='card-header'>
            <h3 className='card-title'>{title}</h3>
            <h5>{detail.year}</h5>
          </header>
          <p className='card-description'>{description}</p>
          <h4 className='card-price'>{formatPrice(detail.price)}</h4>
          <Button label='Detalles' onClick={handleClick} />
        </div>
      </div>
    </article>
  )
}