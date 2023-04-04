import {render, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import List from "./List"

// metodo get: ele falha se o elemento não estiver em tela
// metodo find: ele espera o elemento aparecer em tela e falha se o elemento não estiver 
// metodo query: ele NÃO falha se o elemento não estiver em tela (uso: quando quer verificar se o elemento não ta em tela)


describe('App Component', () => { 
  it('should render list items', () => { 
    const { getByText} = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)
    
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Mayk')).toBeInTheDocument()
  })

  it('should be able to add new item to list', async  () => {
    const { getByText, debug, getByPlaceholderText, findByText } = render(<List initialItems={[]} />) 
    
    // pagando o botão
    const inputElement = getByPlaceholderText('Novo item')
// adicionando/pegando o botão
    const addButton = getByText('Adicionar');

  

    await  userEvent.type(inputElement,'Novo');
   
    await userEvent.click(addButton);

    // roda um loop até retornar um valor válido
    await waitFor( () => { 

      expect(getByText('Novo')).toBeInTheDocument();
    })
    
 
  })
  it('should be able to remove item from list', async  () => {
    const { getByText, queryByText, getAllByText, getByPlaceholderText } = render(<List initialItems={['Diego']} />) 
    
    // pagando o botão
    const inputElement = getByPlaceholderText('Novo item')
// adicionando/pegando o botão
    const addButton = getByText('Adicionar');
    const removeButtons = getAllByText('remover');

  
   
    await userEvent.click(removeButtons[0]);

    // roda um loop até retornar um valor válido
    await waitFor( () => { 

      expect(queryByText('Diego')).not.toBeInTheDocument();
    })
    
 
  })
})