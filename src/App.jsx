import RoutesApp from "./routes/router"
import './index.css'
import DataProvider from "./contexts/DataProvider"

function App() {
  return (
    <DataProvider>
      <RoutesApp />
    </DataProvider>
  )
}

export default App
