export interface TodoParams {
  completed: boolean
  description: string
  title: string
}

export interface EditTodoPayload {
  description: string
  title: string
}

export interface TodoFromRequest {
  todo: string
  id: string
  completed: boolean
}
export interface TodosFromRequest {
  todos: TodoFromRequest[]
}

export interface ITodo extends TodoParams {
  id: string
}
