import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Landing } from './pages';
import { UserContextProvider } from './contexts/user';

function App() {
  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>

      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
