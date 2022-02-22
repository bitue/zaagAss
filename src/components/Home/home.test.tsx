import { render, screen } from "@testing-library/react"
import Home from "./Home"

test('country in the document', ()=> {
    render(<Home></Home>)
   
    const country = screen.getByTestId('home')
    expect(country).toBeInTheDocument()
})