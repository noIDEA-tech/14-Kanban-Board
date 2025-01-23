import { Outlet } from 'react-router-dom'; 
import Navbar from './components/Navbar';

function App() {
//basic auto check
  const isAuthenticated = localStorage.getItem('token');

  return (
    <div className='container'>
         {isAuthenticated && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
