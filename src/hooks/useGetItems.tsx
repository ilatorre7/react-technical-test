import { useEffect, useMemo, useState } from "react"
import { IItem } from "../components/types"
import { API } from "../../config"

export const useGetItems = () => {
  const memo = useMemo(() => ({
    quantity: 10,
    page: 1,
    brand: '',
    hasMore: true,
  }), [])
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(1)
  const [items, setItems] = useState<IItem[]>([])

  const trigger = () => {
    memo.page = memo.page + 1
    setCount((count) => count + 1)
  }

  const filterTrigger = (newBrand: string) => {
    memo.brand = newBrand
    memo.page = 1
    memo.hasMore = true
    setItems([])
    setCount((count) => count + 1)
  }

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      const data = await fetch(`${API}items?_page=${memo.page}&_per_page=${memo.quantity}${memo.brand ? `&detail.brand=${memo.brand}` : '' }`)
      const json = await data.json()
      if(!json.next) memo.hasMore = false
      setItems((items) => [...items, ...json.data])
    }
    if(memo.hasMore){
      try {
        fetchItems()
      }
      catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
  }, [count, memo])

  return { items, trigger, loading, filterTrigger }
}