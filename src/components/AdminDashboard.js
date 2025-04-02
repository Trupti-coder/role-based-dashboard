import { useEffect, useState } from "react";

function AdminDashboard(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const deleteProduct=(id)=>{
        
        setProducts(products.filter(product=>product.id !==id));
        alert(`Product with Id ${id} deleted`);
    };

    const addProduct=()=>{
        const newProduct={


            id:products.length+1,
            title:`New Product ${products.length + 1}`,
            price:(Math.random() * 100).toFixed(2)
        };

        setProducts([...products,newProduct]);
    };






    return(
        <>
        <div>
            <h1>Admin Panel - Manage products</h1>
            <button onClick={addProduct}>Add Product</button>


            <ul>

                {products.map(product=>(
                    
                    <li key={product.id}>{product.title} - ${product.price} 
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>

                    </li>
                ))}

              
            </ul>
        </div>
        
        
        </>
    );
}

export default AdminDashboard;