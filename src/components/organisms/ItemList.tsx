import "../../styles/ItemList.css"
import { IItem } from "../types"
import { ItemCard } from "../molecules/ItemCard"

export const ItemList = ({ list, isLoading, onItemClick }: { list: IItem[], isLoading: boolean, onItemClick: ({ id }: { id: number }) => void }) => {

  return (
    <div className='list-container'>
      {
        list.map((item) => (
          <ItemCard key={`item-${item.id}`} {...item} onClick={onItemClick} />
        ))
      }
      {isLoading && <p>Loading...</p>}
    </div>
  )
}