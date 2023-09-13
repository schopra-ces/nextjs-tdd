import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodoItem";
import { TODO } from "@/mockdata/todos";

const mockTodo = TODO;
const mockSetTodos = jest.fn();

describe("Add Todo", () => {
  describe("Render", () => {
    it("should render the article", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
      const article = screen.getByRole("article");
      expect(article).toBeInTheDocument();
    });

    // it("should render the label", () => {
    //   render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
    //   const label = screen.getByTestId("todo-item");
    //   expect(label).toBeInTheDocument();
    // });

    it("should render the delete button", () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
      const button = screen.getByTestId("delete-button");
      expect(button).toBeInTheDocument();
    });
  });
  //TODO
  describe("Behavior", () => {
    it("should call setTodos when delete button clicked", async () => {
      render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />);
      const button = screen.getByTestId("delete-button");
      await userEvent.click(button);
      expect(mockSetTodos).toBeCalled();
    });
  });
});
