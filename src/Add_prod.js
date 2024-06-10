
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Ajouter = () => {

    const Data = useSelector((state) => state.Products);
    const [input,Setinput] = useState(Data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        Setinput({...input,[e.target.name]:e.target.value});
    }
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({ type: 'Add_Product', payload: input });
        navigate('/')
    }

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAdd} >
                <h2>Edit Product</h2>
                <input type="text" name="image" onChange={handleChange} placeholder="Image URL" required />
                <input type="text" name="title"  onChange={handleChange} placeholder="Title" required />
                <input type="number" name="price"  onChange={handleChange} placeholder="Price" required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Ajouter; // Make sure to export the component named Update
