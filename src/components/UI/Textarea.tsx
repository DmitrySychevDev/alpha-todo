interface InputProps {
  placeholder: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  value?: string
  label?: string
}

const Textarea = ({ placeholder, onChange, value, label }: InputProps) => {
  return (
    <div>
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
        aria-placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Textarea
