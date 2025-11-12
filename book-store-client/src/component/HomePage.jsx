import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const HomePage = () => {

    const coffees = useLoaderData()
    console.log(coffees);
    



    return (
        <div className='text-center grid justify-center items-center'>
            <h1>All added coffees</h1>
            <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center justify-center border'>
                {
                coffees.map(coffee => < Card coffee={coffee} key={coffee._id}></Card>)
            }
            </div>
        </div>
    );
};

export default HomePage;