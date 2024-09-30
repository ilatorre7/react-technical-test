import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';
import { ItemList } from '../../components/organisms';

describe('<ItemList />', () => {
  const expectedCards = [{
    id: 1,
    title: "Jordan 1 Low OG",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/880101-800-800?width=800&height=800&aspect=true",
    description: "Comienza el Año del Dragón con estilo. Este elegante AJ1 tiene superposiciones escamosas en verde petróleo inspiradas en la única criatura mitológica del zodíaco chino.",
    detail: {
      price: "299999",
      year: 2023,
      brand: "Jordan",
      colorway: "Verde petróleo/Metallic Gold"
    }
  },
  {
    id: 2,
    title: "Jordan 1 Mid SE",
    image: "https://nikearprod.vtexassets.com/arquivos/ids/811855-1200-1200?width=1200&height=1200&aspect=true",
    description: "Una versión moderna de un clásico, el Jordan 1 Mid SE cuenta con materiales premium y detalles únicos.",
    detail: {
      price: "279999",
      year: 2022,
      brand: "Jordan",
      colorway: "Blanco/Negro/Rojo"
    }
  }]

  it('Should render a list of cards with the correct values', () => {
    const { container } = render(<ItemList list={expectedCards} isLoading={false} />)
    expect(container).toMatchSnapshot()
  })
})