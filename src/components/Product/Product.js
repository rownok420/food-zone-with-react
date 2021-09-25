import React from 'react';
import './Product.css'

const Product = (props) => {
    const {strMeal, strMealThumb, strInstructions} = props.meal
    return (
        <div className='col-md-6 g-4'>
            <div className="card h-100 mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={strMealThumb} className="img-fluid h-100 img-style p-3 rounded" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title text-success">{strMeal.slice(0,20)}</h5>
                            <p className="card-text">{strInstructions.slice(0, 150)}</p>
                            <button className='btn btn-success px-4' onClick={() => props.handleClick(props.meal)}><i class="fas fa-utensils me-2"></i>See details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;