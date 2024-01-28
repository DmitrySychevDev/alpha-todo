import Todo from './Todo'

import { ITodo, TodoParams } from '@/types'

interface TodosProps {
  editCard: (id: string) => (params: TodoParams) => void
  deleteCard: (id: string) => () => void
  todos: ITodo[]
}

const Todos = ({ editCard, todos, deleteCard }: TodosProps) => {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            initialDescription={todo.description}
            initialTitle={todo.title}
            initialIsActive={todo.isActive}
            changeTodo={editCard(todo.id)}
            onDelete={deleteCard(todo.id)}
          />
        )
      })}
    </div>
  )
}

export default Todos
