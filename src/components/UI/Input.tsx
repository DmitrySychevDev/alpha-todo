interface InputProps {
  placeholder: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}

const Input = ({ placeholder, onChange, value }: InputProps) => {
  return (
    <div className="">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
        id="input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
