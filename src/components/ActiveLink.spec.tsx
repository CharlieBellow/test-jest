import { render } from '@testing-library/react'
import {ActiveLink} from '.'

// mock: simula algo externo ao componente e podemos adicionar valor para que ele retorne algo que a gente precisa para testar o componente.
jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: "/" /* esse valor foi o que eu tô querendo testar */
      }
    }
  }
 })


test("active link renders correctly", () => {
  const { debug } = render(
    <ActiveLink></ActiveLink>
  )

  debug()
})