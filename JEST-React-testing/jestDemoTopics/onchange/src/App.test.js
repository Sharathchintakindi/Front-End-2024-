import { fireEvent } from "@testing-library/dom"
import App from "./App"
import {render,screen} from "@testing-library/react"


test("on change event testing",()=>{
render(<App/>)
let input = screen.getByRole("textbox")
fireEvent.change(input,{target:{value:"a"}})
expect(input.value).toBe('atest')
})