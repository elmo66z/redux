import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Ajouter  from './Add_prod';
import Update from './Update';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Products);
  const Category = Array.from(new Set(Data.map(product => product.category)));
  const navigate = useNavigate();

  const Delete_prod = (title) => {
    dispatch({ type: 'Delete_product', payload: title });
  }

  const handleEdit = (prod) => {
    navigate(`/Update/${prod.title}`);
  }
  const [search,Setsearch] = useState('')
  const handleSeach = () => {
    dispatch({type : 'search_product' , payload : search})
  }

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    dispatch({type : 'filter_product' , payload : selectedCategory })
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Add_prod">Add Product</Link>
          </li>
        </ul>
        <h1>Search : </h1>
        <form>
          <input type='text' placeholder='?' onChange={(e)=>Setsearch(e.target.value)} />
          <input type='button' value='Search' onClick={handleSeach} />
        </form>
        <h1>Filter</h1>
        <select onChange={handleFilter}>
              {Category.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
        </select>
      </nav>
      <Routes>
        <Route path='/Add_prod' element={<Ajouter />} />
        <Route path='/Update/:title' element={<Update />} />
        <Route path='/' element={
          <>
            <h1>Liste des Produits :</h1>
            <ul>
              {Data.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} width="50" />
                  <span>{item.title} - ${item.price}</span>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => Delete_prod(item.title)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
