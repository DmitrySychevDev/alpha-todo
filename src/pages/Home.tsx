import { useState, useEffect } from 'react'
import TodoEdit from '@/components/TodoEdit'
import Todos from '@/components/Todos'

import request from '@/utils'

import { ITodo, TodoParams, TodoFromRequest, TodosFromRequest } from '@/types'

const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    request('GET', '/todos').then((data: TodosFromRequest) => {
      console.log(data)
      setTodos(
        data.todos.map((todo) => ({
          id: todo.id,
          title: todo.todo,
          completed: todo.completed,
          description: '',
        }))
      )
    })
  }, [])

  const createCard = async ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => {
    try {
      const newTodo: TodoFromRequest = await request('POST', '/todos/add', {
        todo: title,
        userId: 1,
        completed: false,
      })

      setTodos((prev) => {
        return [
          ...prev,
          { id: newTodo.id, title, description, completed: newTodo.completed },
        ]
      })
    } catch (e) {
      console.error(e)
    }
  }

  const editCard = (id: string) => {
    return async ({ title, description, completed }: TodoParams) => {
      try {
        const newTodo: TodoFromRequest = await request('PUT', `/todos/${id}`, {
          todo: title,
          userId: 1,
          completed,
        })

        setTodos((prev) => {
          const newCards = [...prev]
          const cardIndex = prev.findIndex((card) => card.id === id)
          if (cardIndex === -1) {
            return prev
          }

          newCards[cardIndex] = {
            id: newTodo.id,
            title: newTodo.todo,
            description,
            completed: newTodo.completed,
          }
          return newCards
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const deleteCard = (id: string) => {
    return async () => {
      try {
        await request('DELETE', `/todos/${id}`)
        setTodos((prev) => prev.filter((card) => card.id !== id))
      } catch (e) {
        console.error(e)
      }
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
