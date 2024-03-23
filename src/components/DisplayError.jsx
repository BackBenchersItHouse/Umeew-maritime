import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-600'>Something went wrong!</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <p className='text-xl'>Please Go To <Link to='/' className='text-2xl font-bold text-secondary'>Home</Link></p>
        </div>
    );
};

export default DisplayError;