import React from 'react';
import goodkidzimg from '../images/LOGO_HOME@3x.png'; // Ruta al logo de Good Kidz
import redFaceImg from '../images/BUDDY_STAR.gif'; // Ruta a la imagen de la cara roja


const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center">
                    <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                        <div className="flex justify-center mb-8">
                            <img
                                src={goodkidzimg}
                                alt="Good Kidz logo"
                                className="max-h-32 w-auto md:max-h-48"
                            />
                        </div>
                        <form>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Ciudad
                                    </label>
                                    <select
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                        required
                                    >
                                        <option value="Medellin">Medellín</option>
                                        <option value="Medellin">Sabaneta</option>
                                        <option value="Medellin">Bello</option>
                                    </select>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="newsletter"
                                            name="newsletter"
                                            type="checkbox"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-500 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="newsletter" className="font-medium text-gray-700 dark:text-gray-300">
                                            Acepto recibir correos electrónicos de la fundación Good Kidz.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                                >
                                    Regístrate
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                        src={redFaceImg}
                        alt="Red face"
                        className="max-h-64 w-auto md:max-h-80 "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
