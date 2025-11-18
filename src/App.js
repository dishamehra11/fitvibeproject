import './App.css';
import Header from './assets/Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './assets/PG/Home';

function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   
   </Routes>
   </>
  );
}

export default App;
