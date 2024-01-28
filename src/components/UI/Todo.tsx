interface TodoProps {
  changeComplete: (flag: boolean) => void
  isActive: boolean
  text: string
}

const Todo = ({ text, isActive, changeComplete }: TodoProps) => {
  const handleCheckboxChange = () => {
    changeComplete(!isActive)
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isActive}
        onChange={handleCheckboxChange}
        className="mr-2 cursor-pointer"
      />
      <p className={isActive ? 'line-through text-gray-500' : 'text-black'}>
        {text}
      </p>
    </div>
  )
}

export default Todo
