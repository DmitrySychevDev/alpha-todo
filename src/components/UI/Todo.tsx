import React, { useState, useEffect } from 'react'
import Button from './Button'

import TodoEdit from '../TodoEdit'

interface EditTodoPayload {
  isActive: boolean
  description: string
  title: string
}

interface TodoProps {
  initialIsActive: boolean
  initialDescription: string
  initialTitle: string
  changeTodo: (params: EditTodoPayload) => void
  onDelete: () => void
}

const Todo: React.FC<TodoProps> = ({
  initialTitle,
  initialDescription,
  initialIsActive,
  changeTodo,
  onDelete,
}) => {
  const [isActive, setIsActive] = useState<boolean>(initialIsActive)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(initialIsActive)
  }, [initialIsActive])

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => {
    if (title && description) {
      setIsEditing(false)
      changeTodo({ title, description, isActive })
    }
  }

  const handleCheckboxChange = () => {
    changeTodo({
      description: initialDescription,
      title: initialTitle,
      isActive: !isActive,
    })
    setIsActive(!isActive)
  }

  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        {isEditing ? (
          <TodoEdit
            initialDescription={initialDescription}
            initialTitle={initialTitle}
            onSave={handleSaveClick}
            onCancel={() => {
              setIsEditing(false)
            }}
            submitLabel="Сохранить"
            cancelLabel="Отмена"
          />
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">{initialTitle}</h2>
            <p className="text-gray-700 mb-4">{initialDescription}</p>
            <div className="flex gap-2 items-center">
              <div>
                <Button onClick={handleEditClick}>Редактировать</Button>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={initialIsActive}
                  onChange={handleCheckboxChange}
                  className="mr-2 cursor-pointer"
                />
                <span className="text-gray-700">Отметка о выполнении</span>
              </div>
            </div>
            <div className="mt-2">
              <Button onClick={onDelete} danger>
                Удалить
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Todo
