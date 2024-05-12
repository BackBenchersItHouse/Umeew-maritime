import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <p className='text-red-600'>Something went wrong!</p>
            <p className='text-red-600'>404 {error.statusText || error.message}</p>
            <p className='text-xl'>Please Go To <Link to='/' className='text-2xl font-bold text-secondary'>Home</Link></p>
        </div>
    );
};

export default DisplayError;