import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { TODOS } from "@/mockdata/todos";
import { NO_TODOS } from "@/constants";

const mockTodosList = TODOS;

const mockSetTodos = jest.fn();

describe("TodoList component", () => {
  it('should render "No Todos Available" when empty', () => {
    render(<TodoList todos={[]} setTodos={mockSetTodos} />);
    const message = screen.getByText(NO_TODOS);
    expect(message).toBeInTheDocument();
  });

  it("should render a list with correct number of items", () => {
    render(<TodoList todos={mockTodosList} setTodos={mockSetTodos} />);
    const todosArray = screen.getAllByRole("article");
    expect(todosArray.length).toBe(3);
  });

//   it("should render the todos in the correct order", () => {
//     render(<TodoList todos={mockTodosList} setTodos={mockSetTodos} />);
//     const firstItem = screen.getAllByTestId("todo-item")[0];
//     expect(firstItem).toHaveTextContent();
//   });
});
