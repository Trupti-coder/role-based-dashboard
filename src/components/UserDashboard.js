function UserDashboard(){
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);

    return(
        <>


        </>
    );
}

export default UserDashboard;