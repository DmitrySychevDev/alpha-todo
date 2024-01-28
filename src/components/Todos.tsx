import { useState } from 'react'

import Todo from './UI/Todo'

interface ITodo {
  id: string
  text: string
  isActive: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: '1234', text: 'test', isActive: false },
    { id: '12345', text: 'test2', isActive: true },
  ])

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            isActive={todo.isActive}
            changeComplete={(flag: boolean) => {
              console.log('isActive -', flag)
            }}
          />
        )
      })}
    </div>
  )
}

export default Todos
