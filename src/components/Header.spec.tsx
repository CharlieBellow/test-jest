import { render } from '@testing-library/react'
import {Header} from '.'


describe('Header component', () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Header/>
    )
  
    expect(getByText("Home")).toBeInTheDocument()
    expect(getByText("Posts")).toBeInTheDocument()

 })
})