import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>

<Routes>
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/user"  element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

</Routes>

    
    </>
   
  );
}

export default App;
