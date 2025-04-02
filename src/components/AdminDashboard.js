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
            
        }
    }






    return(
        <>
        <div>
            <h1>Admin Panel - Manage products</h1>
            <button onClick={addProduct}>Add Product</button>

            <ul>

              
            </ul>
        </div>
        
        
        </>
    );
}

export default AdminDashboard;