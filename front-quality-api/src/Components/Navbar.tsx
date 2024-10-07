import { Link } from 'react-router-dom';
import { useState,  useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUsers, faThList, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Auth/context/AuthContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { handlerLogout, login } = useContext(AuthContext);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={toggleNavbar} className="text-white md:hidden">
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <img
                        src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0042/7987/Bancoomeva_personas__productos_y_virtual.png?1615358533"
                        alt="Logo" className="h-16 mr-3"
                    />
                </div>
                <h1 className="text-xl font-serif text-white mx-auto">Interoperabilidad</h1>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} items-center`}>
                    {login.isAuth && (
                        <>
                            <Link
                                to="/users"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2"
                            >
                                <FontAwesomeIcon icon={faUsers} className="fa-lg" />
                            </Link>
                            <Link
                                to="/apis"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2"
                            >
                                <FontAwesomeIcon icon={faThList} className="fa-lg" />
                            </Link>
                            <Link
                                to="/apis/apisComponetsExternas"
                                className="text-white hover:text-empresa-verde transition-shadow hover:shadow-md p-2 rounded-full cursor-pointer bg-empresa-verde hover:bg-empresa-rojo mx-2"
                            >
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-lg" />
                            </Link>

                            {/* <div className="relative ml-3">
                        <button
                            onClick={handleButtonClick}
                            className={`bg-white text-gray-800 placeholder-gray-500 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-empresa-verde transition-all ${isSearchExpanded ? 'w-48' : 'w-32'} hover:w-48 hover:scale-105`}
                        >
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={`mr-2 text-empresa-verde ${isSearchExpanded ? 'ml-2' : ''}`}
                            />
                        </button>
                        {isSearchExpanded && (
                            <input
                                type="text"
                                placeholder="Buscar Api..."
                                className="absolute right-0 top-0 w-full font-mono bg-gray-300 text-black placeholder-black border-none outline-none focus:outline-none py-2 px-4 rounded-full shadow-md"
                                ref={searchInputRef}
                                onBlur={handleBlur}
                            />
                        )}
                    </div> */}
                            <div className="ml-4 ">

                                <button onClick={handlerLogout} className="bg-empresa-verde hover:bg-empresa-rojo text-white rounded-full font-bold py-2 px-4 hover:text-white ">
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-white" />
                                   
                                </button>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
