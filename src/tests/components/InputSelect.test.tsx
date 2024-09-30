import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { InputSelect } from '../../components/atoms';

describe('<InputSelect />', () => {
  it('Should render a select input', () => {
    const options = [
      { label: 'Label 1', value: '1' },
      { label: 'Label 2', value: '2' },
      { label: 'Label 3', value: '3' }
    ];
    render(<InputSelect placeholder='Selecciona una marca para filtrar' options={options} />);
    expect(screen.getByRole('combobox')).toHaveValue('');
  })
})