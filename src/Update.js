import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


const Update = () => {
    const {title} = useParams();
    const Prod_Select = useSelector((state)=>state.Products.find(pro=>pro.title === title));
    const [input,Setinput] = useState(Prod_Select);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
     Setinput({...input,[e.target.name]:e.target.value});
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch({type : 'Update_product' , payload : input});
        navigate('/')
    }
    return (
        <>
        <h1>{Prod_Select.title}</h1>
        <form onSubmit={handleUpdate} >
            <h2>Edit Product</h2>
            <input type="text" name="image" defaultValue={Prod_Select.image}  onChange={handleChange} placeholder="Image URL" required />
            <input type="text" name="title" defaultValue={Prod_Select.title} onChange={handleChange} placeholder="Title" required />
            <input type="number" name="price" defaultValue={Prod_Select.price} onChange={handleChange} placeholder="Price" required />
            <button type="submit">Update Product</button>
        </form>
    </>
    )
} 

export default Update ;