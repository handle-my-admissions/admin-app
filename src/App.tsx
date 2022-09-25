import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Landing, Login } from './pages';
import { UserContextProvider } from './contexts/user';

function App() {
  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
