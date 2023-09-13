import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'

describe('Home page', () => {

    it('should allow to add a new todo', async () => {
        render(<Home />)
        const input = screen.getByPlaceholderText('Add New Todo')
        await userEvent.type(input, 'Adding a new todo')
        expect(input).toHaveValue('Adding a new todo')

        const button = screen.getByRole('button', {
            name: 'Submit'
        })
        await userEvent.click(button)

        const dataElement = await screen.findByText('Adding a new todo')
        expect(dataElement).toHaveTextContent('My new todo')
    })

    // it('should allow to delete a todo', async () => {
    //     render(<Home />)
    //     const todoText = screen.queryByText('Added todo)
    //     expect(todoText).toBeInTheDocument()
    //     const button = screen.getAllByTestId('delete-button')[0]
    //     await userEvent.click(button)
    //     expect(todoText).not.toBeInTheDocument()
    // })

    // it('should allow to edit a todo', async () => {
    //     render(<Home />)
    //     const todoText = screen.queryByText(Added Todo')
    //     expect(todoText).toBeInTheDocument()
    //     const button = screen.getAllByTestId('delete-button')[0]
    //     await userEvent.click(button)
    //     expect(todoText).not.toBeInTheDocument()
    // })

})