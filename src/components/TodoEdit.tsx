import { useState } from 'react'

import { Button, Input, Textarea } from './UI'

interface EditTodoPayload {
  description: string
  title: string
}

interface TodoProps {
  initialDescription?: string
  initialTitle?: string
  onSave: (params: EditTodoPayload) => void
  onCancel?: () => void
}

const TodoEdit = ({
  initialTitle,
  initialDescription,
  onSave,
  onCancel,
}: TodoProps) => {
  const [title, setTitle] = useState<string>(initialTitle ?? '')
  const [description, setDescription] = useState<string>(
    initialDescription ?? ''
  )

  const handleTodoChange = () => {
    onSave({ title, description })
    setTitle('')
    setDescription('')
  }
  return (
    <div>
      <Input
        value={title}
        label="Название задачи"
        placeholder="Введите новое название задачи"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mt-4">
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите новое описание задачи"
          label="Описание задачи"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <Button onClick={handleTodoChange}>Сохранить</Button>
        <Button onClick={onCancel}>Отмена</Button>
      </div>
    </div>
  )
}

export default TodoEdit
