import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Landing, Login, SignUp } from './pages';
import { UserContextProvider } from './contexts/user';

function App() {
  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
