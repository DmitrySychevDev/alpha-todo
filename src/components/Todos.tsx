import { useState } from 'react'

import Todo from './UI/Todo'

interface ITodo {
  id: string
  title: string
  description: string
  isActive: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: '1234',
      title: 'test',
      description: 'test description',
      isActive: false,
    },
    {
      id: '12345',
      title: 'test2',
      description: 'test description2',
      isActive: true,
    },
  ])

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            initialDescription={todo.description}
            initialTitle={todo.title}
            initialIsActive={todo.isActive}
            changeTodo={(params) => {
              console.log(params)
            }}
          />
        )
      })}
    </div>
  )
}

export default Todos
