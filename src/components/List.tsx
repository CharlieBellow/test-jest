import {useState} from 'react'

type ListProps = {
  initialItems: string[]
}


export default function List({initialItems}: ListProps) {

  const [newItem, setNewItem] = useState("")
  const [list, setList] = useState(initialItems)

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item))
    }, 500)
  }

  return (
    <>
      <input type="text" value={ newItem} onChange={e => setNewItem(e.target.value)} placeholder='Novo item'/>
    <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item =>
          <li key={item}>{item}
          <button onClick={() => removeFromList(item)}>remover</button>
          </li>
        )}
      </ul>
    </>
  )
}

