export interface TodoParams {
  isActive: boolean
  description: string
  title: string
}

export interface EditTodoPayload {
  description: string
  title: string
}

export interface ITodo extends TodoParams {
  id: string
}
