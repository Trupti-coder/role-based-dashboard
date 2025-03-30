import { useState } from "react";

function SignUp(){

    const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

    return(

        <>
        <form  onSubmit={handleSubmit}>

        <h2>Sign Up</h2>
      <input type="text"
       placeholder="Name"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required />


  <input type="text"
   placeholder="City"
    value={city} onChange={(e) => setCity(e.target.value)} 
     required />

<input type="date"
 value={dob}
  onChange={(e) => setDob(e.target.value)} 
  required 
  />
<input type="email"
 placeholder="Email"
  value={email}
   onChange={(e) => setEmail(e.target.value)} 
   required />

<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
<select value={role} onChange={(e) => setRole(e.target.value)} required>






        </form>

        </>
    )
       
}

export default SignUp;