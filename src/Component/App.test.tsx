import { render, screen } from '@testing-library/react'
import Component from './index'

test('renders learn react link', () => {
  render(<Component name="Test" />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
