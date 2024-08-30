import React, { useState } from 'react';
import { doPasswordReset } from '../../../firebase/auth'; // Asegúrate de que esta ruta sea correcta

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            await doPasswordReset(email);
            setMessage('Si el correo electrónico existe, se ha enviado un correo de restablecimiento de contraseña.');
        } catch (error) {
            setMessage('Si el correo electrónico existe, se ha enviado un correo de restablecimiento de contraseña.');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                <div className="text-center">
                    <h2 className="text-gray-800 text-xl font-semibold sm:text-2xl">Restablecer contraseña</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-600 font-bold">Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                        />
                    </div>
                    {message && (
                        <span className="text-green-600 font-bold">{message}</span>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300"
                    >
                        Enviar correo de restablecimiento
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;