import { fireEvent } from "@testing-library/dom"
import App from "./App"
import {render,screen} from "@testing-library/react"


test("Click event test case",()=>{
  render(<App/>)
  const btn = screen.getAllByRole("button") 
  fireEvent.click(btn)
  expect(screen.getByText("updated data")).toBeInTheDocument()
})