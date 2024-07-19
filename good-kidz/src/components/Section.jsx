import React from 'react';
import { Link } from 'react-router-dom';
import goodkidzimg from '../images/LOGO_HOME@3x.png'; // Ruta al logo de Good Kidz
import redFaceImg from '../images/BUDDY_STAR.gif'; // Ruta a la imagen de la cara roja

const EventInfo = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
                <div className="flex-1 text-center lg:text-left space-y-4">
                    <div className="flex justify-center lg:justify-start mb-8">
                        <img
                            src={goodkidzimg}
                            alt="Good Kidz logo"
                            className="max-h-32 w-auto md:max-h-48"
                        />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        1er Encuentro Arte y Vida
                    </h2>
                    <p className="text-gray-500 md:text-xl dark:text-gray-400">
                        Tu pieza gráfica puede ser expuesta en el FERXXOCALIPSIS tour Medellín, el 6, 7 y 8 de diciembre de 2024.
                    </p>
                    <Link to="/Register" className="btn btn-primary">
                        Regístrate aquí para más información
                    </Link>
                </div>
                <div className="flex-1 flex justify-center mt-8 lg:mt-0 lg:justify-end">
                    <img
                        src={redFaceImg}
                        alt="Red face"
                        className="max-h-64 w-auto md:max-h-80 "
                    />
                </div>
            </div>
        </section>
    );
};

export default EventInfo;
