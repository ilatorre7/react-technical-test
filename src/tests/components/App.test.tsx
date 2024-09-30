import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../../App'


describe('<App />', () => {
  it("Should render the app with initial 10 components", async () => {
    render(<App />);
    const products = await screen.findAllByRole('article');
    expect(products.length).toEqual(10);
  })

  it("Should render the app with 20 components after scrolling bottom", async () => {
    render(<App />);
    fireEvent.scroll(window, { target: { scrollY: 2000 } })
    await screen.findByText('Reebok Zig Kinetica II');
  })
})