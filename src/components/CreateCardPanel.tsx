import { Input, Button } from './UI'

const CreateCardPanel = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-56">
        <Input placeholder="Введите название задачи" />
      </div>
      <div>
        <Button>Добавить</Button>
      </div>
    </div>
  )
}

export default CreateCardPanel
