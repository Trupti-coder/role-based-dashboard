function Login(){

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('myuser')) || [];

    const validUser = storedUsers.find(user => user.userName === name && user.userPassword === password);




  }

    return(
        <>
    
       
        <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>


        
        </>
    );
}

export default Login;