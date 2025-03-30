function Login(){

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    return(
        <>
        <div>

        <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>




        </div>
        
        </>
    );
}

export default Login;