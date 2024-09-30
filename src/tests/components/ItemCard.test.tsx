import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';
import { ItemCard } from '../../components/molecules/ItemCard';

describe('<ItemCard />', () => {
  const expectedCard = {
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
  }

  it('Should render a card with the correct values', () => {
    const { container } = render(<ItemCard {...expectedCard } />)
    expect(container).toMatchSnapshot()
  })
})