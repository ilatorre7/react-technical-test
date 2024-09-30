import { useEffect, useState } from "react"
import { IOption } from "../components/types"
import { API } from './../../config';

export const useGetBrands = () => {
  const [brands, setBrands] = useState<IOption[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await fetch(`${API}brands`)
      const json = await data.json()
      setBrands(json)
    }
    try {
      fetchBrands()
    }
    catch (e) {
      console.log(e)
    }
  }, [])

  return { brands }
}