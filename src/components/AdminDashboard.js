import { useEffect, useState } from "react";

function AdminDashboard(){

    const [products,setProducts]=useState([]);

    useEffect(()=>{


    })
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