import { Outlet } from 'react-router-dom'
import { Navbar } from './components/partials/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
