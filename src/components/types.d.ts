export interface IItem {
  id: number,
  title: string,
  image: string,
  description: string,
  detail: {
    brand: string,
    price: string,
    year: number,
    colorway: string
  }
}

export interface IOption { 
  label: string, 
  value: string 
}