import React, {useState, useEffect} from 'react';
import Details from '../Details/Details';
import Product from '../Product/Product';

const Meal = () => {

    const [meals, setMeal] = useState([])
    const [details, setDetails] = useState([])
    const [searchMeal, setSearchMeal] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
            .then(res => res.json())
            .then(data =>{
                setMeal(data.meals)
                setSearchMeal(data.meals)
            })
    }, [])

    const handleClick = meal => {
        setDetails(meal)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedMeal = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setSearchMeal(matchedMeal)
    }


    return (
        <div>
            <div className='text-center bg-light p-4'>
               <input className='w-75 p-1' onChange={handleSearch} type="text" placeholder='Search your desire food' />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='row'>
                        {
                            searchMeal.map(meal => <Product key={meal.idMeal} handleClick={handleClick} meal={meal} />)
                        }
                        </div>
                        
                    </div>
                    <div className='col-md-3'>
                        <Details details={details} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;