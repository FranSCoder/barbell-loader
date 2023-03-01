import BarbellMale from './components/BarbellMale'
import BarbellFemale from './components/BarbellFemale'
import Plates from './components/Plates'
import PlatesRack from './components/PlatesRack'
import Wrapper from './assets/wrappers/PlateCollection'

const App = () => {
  const zoom = 3
  return (
    <>
      <BarbellMale />
      <PlatesRack />
      <Plates />
    </>
  )
}

export default App
