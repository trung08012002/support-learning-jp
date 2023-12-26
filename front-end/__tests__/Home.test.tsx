import { render, screen } from "@testing-library/react"
import Home from "@/app/home/page"

it('should have Từ vựng text', () => {
    render(<Home />)
    const myElem = screen.getByText("Từ vựng")

    expect(myElem).toBeInTheDocument()
})