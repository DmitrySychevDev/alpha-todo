import Todo from './UI/Todo'

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

interface TodosProps {
  editCard: (id: string) => (params: EditTodoPayload) => void
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
