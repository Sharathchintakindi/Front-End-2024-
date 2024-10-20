import { render, screen } from '@testing-library/react';
import App from './App';

test('Other First React App', () => {
  render(<App />);
  const text = screen.getByText(/First React App/i);
  expect(text).toBeInTheDocument();
});


test("Other Testing input box",()=>{
  render(<App/>)
  let checkInput =screen.getByRole("textbox")
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter Your Name")
  expect(checkInput).toBeInTheDocument()
  expect(checkInputPlaceHolder).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name", "userName")
})