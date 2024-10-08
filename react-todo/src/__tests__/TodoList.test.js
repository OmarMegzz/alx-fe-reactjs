// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

// Test for initial render
test("renders TodoList component with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
});

// // Test for adding a new todo
// test("can add a new todo", () => {
//   render(<TodoList />);

//   // Add a new todo
//   fireEvent.change(screen.getByRole("textbox"), {
//     target: { value: "New Todo" },
//   });
//   fireEvent.click(screen.getByText(/Add Todo/i));

//   // Verify the new todo is added
//   expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
// });

// // Test for toggling a todo
// test("can toggle a todo", () => {
//   render(<TodoList />);

//   // Find the todo item
//   const todoItem = screen.getByText(/Learn React/i);

//   // Toggle the todo item
//   fireEvent.click(todoItem);
//   expect(todoItem).toHaveStyle("text-decoration: line-through");

//   fireEvent.click(todoItem);
//   expect(todoItem).toHaveStyle("text-decoration: none");
// });

// // Test for deleting a todo
// test("can delete a todo", () => {
//   render(<TodoList />);

//   // Find and click the delete button
//   const deleteButton = screen.getAllByText(/Delete/i)[0];
//   fireEvent.click(deleteButton);

//   // Verify the todo item is deleted
//   expect(screen.queryByText(/Learn React/i)).toBeNull();
// });
