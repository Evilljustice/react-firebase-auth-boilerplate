import React from 'react';

const Header = () => {
    return (
        <header className="bg-custom-blue text-white p-4">
            <div className="flex items-center">
                <img
                    className="w-20 h-20 rounded-lg"
                    src="./assets/icons/apple-touch-icon.png"
                    alt="App Icon"
                />
                <div className="ml-4">
                    <h2 className="text-2xl font-bold">Personalized Learning USabana App</h2>
                </div>
            </div>
            <div className="mt-2">
                <h3 className="text-lg">Autenticarse</h3>
            </div>
        </header>
    );
};

export default Header;