import { Header } from './layouts/Header';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
      
  )
}

export default App
