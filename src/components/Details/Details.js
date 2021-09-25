import React from 'react';
import './Details.css'

const Details = (props) => {
    const {strMeal, strMealThumb, strInstructions} = props.details


    return (
        <div className='text-center mt-3'>
            <h3 className='fw-bold text-success mb-3'>See Details</h3>

            <div className="card h-100" style={{width: '100%'}}>
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-success">{strMeal?.slice(0, 20)}</h5>
                    <p className="card-text">{strInstructions?.slice(0,120)}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;