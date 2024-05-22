import {DataProvider} from '../Context/index.jsx'
import { AppUi } from './AppUi.jsx'

function App() {
 
  return (
    <DataProvider >
      <AppUi />
    </DataProvider>
  )
}

export default App
