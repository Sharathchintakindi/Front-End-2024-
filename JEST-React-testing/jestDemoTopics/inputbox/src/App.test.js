import { render, screen } from "@testing-library/react";
import App from "./App";

test("First React App", () => {
  render(<App />);
  const text = screen.getByText(/First React App/i);
  expect(text).toBeInTheDocument();
});

test("Testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter Your Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "userName");
});

describe.skip("UI test case group", () => {
  test("test case 1", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
  test("test case 2", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
  test("test case 3", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
});

describe.only("API test case group", () => {
  test("API test case 1", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
  test("API test case 2", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
  test("API test case 3", () => {
    render(<App/>)
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
  });
  describe("Inner test Group",()=>{
    test("Inner test case 1",()=>{
      render(<App/>)
      let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","userName")
    })
  })
});
