import { render, screen } from '@testing-library/react'
import Header from './Header'
import { TITLE } from '@/constants'

describe('h1 element in Header component', () => {
    it('should render the prop title passed to it', () => {
        render(<Header title={TITLE} />) 
        const headerText = screen.getByRole('heading', {
            name: TITLE
        })
        expect(headerText).toBeInTheDocument()
    })
})