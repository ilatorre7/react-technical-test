import "../../styles/ItemList.css"
import { IItem } from "../types"
import { ItemCard } from "../molecules/ItemCard"

export const ItemList = ({ list, isLoading }: { list: IItem[], isLoading: boolean }) => {

  return (
    <div className='list-container'>
      {
        list.map((item) => (
          <ItemCard key={`item-${item.id}`} {...item} />
        ))
      }
      {isLoading && <p>Loading...</p>}
    </div>
  )
}