import CreateCardPanel from '../components/CreateCardPanel'
import Todos from '../components/Todos'
const Home = () => {
  return (
    <div className="p-5 flex flex-col gap-6">
      <CreateCardPanel />
      <Todos />
    </div>
  )
}

export default Home
