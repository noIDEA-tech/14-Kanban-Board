import { Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';

function App() {
//basic auto check

  return (
    <div className='container'>
        {localStorage.getItem('token') && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
