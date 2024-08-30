import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        doSignOut().then(() => {
            navigate('/login');
        });
    };

    return (
        <div className='text-2xl font-bold pt-14'>
            Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.
            <button
                onClick={handleSignOut}
                className='ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'
            >
                Sign Out
            </button>
        </div>
    );
};

export default Home;