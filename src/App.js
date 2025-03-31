import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>

<Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

</Routes>

    
    </>
   
  );
}

export default App;
