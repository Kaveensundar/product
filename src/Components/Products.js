
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => { setProduct(response.data) })
    }, [])

    return (
        <div className='container mt-3'>
            <h2>Products List</h2>
            <div className='row'>
                {
                    product.map(p => (
                        <div className='col-md-4 mb-4' key={p.id}>
                            <div className='card h-100'>
                                <Link to={`/products/${p.id}`} className='text-decoration-none text-dark'>
                                    <img className='card-img' src={p.image} alt={p.title} style={{ height: '200px', objectFit: 'contain' }} />
                                    <div className='card-body d-flex flex-column'>
                                        <h5 className='card-title'>{p.title}</h5>
                                        <p className='card-text'><strong>Price : $</strong>{p.price.toFixed(2)}</p>
                                        <p className='card-text'><strong>Rating : </strong> {p.rating?.rate} ⭐</p>
                                        <button className='btn btn-primary mt-auto'>Buy</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
}

export default Products;