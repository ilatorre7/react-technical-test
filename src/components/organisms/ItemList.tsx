import "../../styles/ItemList.css"
import loader from '../../assets/loader.svg'
import { IItem } from "../types"
import { ItemCard } from "../molecules/ItemCard"


export const ItemList = ({ list, isLoading, onItemClick, lastPostElementRef }: { list: IItem[], isLoading: boolean, onItemClick: ({ id }: { id: number }) => void, lastPostElementRef: (node: HTMLElement) => void }) => {

  return (
    <div className='list-container'>
      {
        list.map((item, index) => (
          <ItemCard key={`item-${item.id}`} {...item} onClick={onItemClick} itemRef={list.length === index + 1 ? lastPostElementRef : null} />
        ))
      }
      {isLoading && <img className='loader' src={loader} alt='Loading' />}
    </div>
  )
}