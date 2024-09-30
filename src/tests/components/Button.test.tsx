import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Button } from '../../components/atoms/Button';

describe('<Button />', () => {
  it("Should render a button with the correct label", () => {
    const label = "Detalles";
    render(<Button label={label} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })
})