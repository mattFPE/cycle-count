import {useSelector} from 'react-redux'
import ControlBar from './Components/ControlBar';
import Create from './Components/Create';
import Main from "./Components/Main";

const App = () => {
  const view = useSelector((state) => state.view)

  return (
    <>
      {/* <ControlBar /> */}
      {view.main && <Main />}
      {/* {view.create && <Create />} */}
    </>
  )
}

export default App;