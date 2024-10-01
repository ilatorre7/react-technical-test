import { useEffect, useState } from "react"
import { API } from "../../config"
import { IItem } from "../components/types"

export const useModal = () => {
  const [isOpen, setOpen] = useState(false)
  const [currentId, setCurrentId] = useState<number>(0)
  const [currentItem, setCurrentItem] = useState<IItem>()

  useEffect(() => {
    const fetchItem = async () => {
      const data = await fetch(`${API}items/${currentId}`)
      const json = await data.json()
      setCurrentItem(json)
      setOpen(true);
    }
    try {
      if(currentId !== 0){
        fetchItem()
      }
    }
    catch (e) {
      console.log(e)
    } finally {
      setCurrentId(0)
    }
  }, [currentId])

  return { currentItem, setCurrentId, isOpen, setOpen }
}