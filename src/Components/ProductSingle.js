import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductSingle() {
    const { id } = useParams();
    const [p, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch(() => setError("Failed to fetch product."));
    }, [id]);

    if (error) return <p className='text-center text-danger'>{error}</p>;
    if (!p) return <p className='text-center mt-5'>Loading product...</p>;

    return (
        <div className='container mt-5'>
            <h2 className='mb-4'>{p.title}</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <img
                        src={p.image}
                        alt={p.title}
                        style={{ height: '400px', objectFit: 'contain' }}
                        className='img-fluid'
                    />
                </div>
                <div className='col-md-6'>
                    <h3 className='text-success'>${p.price.toFixed(2)}</h3>
                    <p><strong>Category:</strong> {p.category}</p>
                    <p>{p.description}</p>
                    <p><strong>Rating:</strong> {p.rating?.rate} ⭐</p>
                    <button className='btn btn-primary me-2'>Buy</button>
                    <Link to="/products" className='btn btn-secondary'>Back to Products</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductSingle;
