import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>

<Routes>
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/user"  />
        <Route path="/admin"  />

</Routes>

    
    </>
   
  );
}

export default App;
