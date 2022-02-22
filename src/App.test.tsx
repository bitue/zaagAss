import { render, screen } from "@testing-library/react"
import App from "./App"


test('test the ui in the document', ()=> {
    render(<App></App>)
    const linkApp = screen.getByTestId('app-test')
    expect(linkApp).toBeInTheDocument()
})

