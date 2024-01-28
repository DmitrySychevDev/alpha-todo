import React, { useState, useEffect } from 'react'

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
}

const Todo: React.FC<TodoProps> = ({
  initialTitle,
  initialDescription,
  initialIsActive,
  changeTodo,
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
    setIsActive(!isActive)
  }

  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
      <div
        className={`bg-${
          isActive ? 'green-500' : 'gray-200'
        } p-4 text-white text-center font-bold`}
      >
        {isActive ? 'Выполнено' : 'В процессе'}
      </div>
      <div className="p-4">
        {isEditing ? (
          <TodoEdit
            initialDescription={initialDescription}
            initialTitle={initialTitle}
            onSave={handleSaveClick}
            onCancel={() => {
              setIsEditing(false)
            }}
          />
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">{initialTitle}</h2>
            <p className="text-gray-700 mb-4">{initialDescription}</p>
            <button
              onClick={handleEditClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Edit
            </button>
            <input
              type="checkbox"
              checked={initialIsActive}
              onChange={handleCheckboxChange}
              className="mr-2 cursor-pointer"
            />
            <span className="text-gray-700">Mark as completed</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Todo
