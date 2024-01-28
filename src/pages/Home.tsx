import { useState } from 'react'
import TodoEdit from '../components/TodoEdit'
import Todos from '../components/Todos'

import { v4 } from 'uuid'

interface EditTodoPayload {
  isActive: boolean
  description: string
  title: string
}

interface ITodo {
  id: string
  title: string
  description: string
  isActive: boolean
}

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const createCard = ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => {
    setTodos((prev) => {
      return [...prev, { id: v4(), title, description, isActive: false }]
    })
  }

  const editCard = (id: string) => {
    return ({ title, description, isActive }: EditTodoPayload) => {
      setTodos((prev) => {
        const newCards = [...prev]
        const cardIndex = prev.findIndex((card) => card.id === id)
        if (cardIndex === -1) {
          return prev
        }

        newCards[cardIndex] = { id, title, description, isActive }
        return newCards
      })
    }
  }

  const deleteCard = (id: string) => {
    return () => {
      setTodos((prev) => prev.filter((card) => card.id !== id))
    }
  }

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="w-1/3">
        <TodoEdit onSave={createCard} submitLabel="Создать" />
      </div>
      <Todos todos={todos} editCard={editCard} deleteCard={deleteCard} />
    </div>
  )
}

export default Home
