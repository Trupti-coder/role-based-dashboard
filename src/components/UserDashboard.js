function UserDashboard(){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);

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

export default UserDashboard;