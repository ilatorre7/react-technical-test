import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';
import { ListFilter } from '../../components/organisms';

describe('<ItemList />', () => {
  const options = [
    { label: "Jordan", value: "Jordan" },
    { label: "Nike", value: "Nike"},
    { label: "Adidas", value: "Adidas"},
    { label: "Puma", value: "Puma"},
    { label: "Reebok", value: "Reebok"},
    { label: "Converse", value: "Converse"},
    { label: "Vans", value: "Vans"},
    { label: "Fila", value: "Fila"},
    { label: "New Balance", value: "New Balance"},
    { label: "Mizuno", value: "Mizuno"},
    { label: 'Asics', value: 'Asics'}
  ]

  it('Should render a list of cards with the correct values', () => {
    const { container } = render(<ListFilter options={options} onFilter={() => {}} />)
    expect(container).toMatchSnapshot()
  })
})