import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/RoleContext';
import logo from '../../assets/images/drinix.png';
import logoutIcon from '../../assets/icons/LogOut.png';
import '../../Styles/Layout.css';

const Header = ({ cartItemCount }) => {
    const { user, setUser } = useAuth(); // Usamos el contexto de autenticación
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
        navigate('/Login');
    };
  
    const handleLogoutClick = () => {
        setUser({ role: 'nolog' }); // Restablecer el rol del usuario al rol por defecto
        navigate('/'); // Redirigir al usuario a la página de inicio después de cerrar sesión
    };
  
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className="header">
            <div className="navbar">
                {/* Logo de la aplicación */}
                <div className="DavidGoliat">
                    {user.role === 'admin' && ( 
                        <a href="#" className="logout" onClick={() => handleNavigation('/adminEmpleadoIndex')}>
                            <img src={logo} alt="Logo" className="LogoImage" />
                        </a>
                    )}
                    {user.role === 'employee' && (
                        <a href="#" className="logout" onClick={() => handleNavigation('/adminEmpleadoIndex')}>
                            <img src={logo} alt="Logo" className="LogoImage" />
                        </a>
                    )}
                    {user.role === 'client' && (
                        <a href="#" className="logout" onClick={() => handleNavigation('/ClienteIndex')}>
                            <img src={logo} alt="Logo" className="LogoImage" />
                        </a>
                    )}
                    {user.role === 'nolog' && (
                        <a href="#" className="logout" onClick={() => handleNavigation('/')}>
                            <img src={logo} alt="Logo" className="LogoImage" />
                        </a>
                    )}
                </div>

                {/* Links de navegación */}
                <div className="navbar-links">
                    {user.role === 'admin' && (
                        <>
                            <button onClick={() => handleNavigation('/')} className="Profile">Home</button>
                            <button onClick={() => handleNavigation('/News')} className="Profile">News</button>
                            <button onClick={() => handleNavigation('/Store')} className="Profile">Store</button>
                            <button onClick={() => handleNavigation('/CartPage')} className="Profile cart-link">
                                Cart <span className="cart-count">{cartItemCount}</span> {/* Mostrar el número de items */}
                            </button>
                        </>
                    )}
                    {user.role === 'employee' && (
                        <>
                            <button onClick={() => handleNavigation('/')} className="Profile">Home</button>
                            <button onClick={() => handleNavigation('/News')} className="Profile">News</button>
                            <button onClick={() => handleNavigation('/Store')} className="Profile">Store</button>
                            <button onClick={() => handleNavigation('/CartPage')} className="Profile cart-link">
                                Cart <span className="cart-count">{cartItemCount}</span> {/* Mostrar el número de items */}
                            </button>
                        </>
                    )}
                    {user.role === 'client' && (
                        <>
                            <button onClick={() => handleNavigation('/')} className="Profile">Home</button>
                            <button onClick={() => handleNavigation('/News')} className="Profile">News</button>
                            <button onClick={() => handleNavigation('/Store')} className="Profile">Store</button>
                            <button onClick={() => handleNavigation('/CartPage')} className="Profile cart-link">
                                Cart <span className="cart-count">{cartItemCount}</span> {/* Mostrar el número de items */}
                            </button>
                        </>
                    )}
                    {user.role === 'nolog' && (
                        <>
                            <button onClick={() => handleNavigation('/')} className="Profile">Home</button>
                            <button onClick={() => handleNavigation('/News')} className="Profile">News</button>
                            <button onClick={() => handleNavigation('/Store')} className="Profile">Store</button>
                            <button onClick={() => handleNavigation('/CartPage')} className="Profile cart-link">
                                Cart <span className="cart-count">{cartItemCount}</span> {/* Mostrar el número de items */}
                            </button>
                        </>
                    )}
                </div>

                {/* Contenedor de login/logout */}
                <div className="login-container">
                    {user.role === 'nolog' ? (
                        <button onClick={handleLoginClick} className="LoginButtonLink">Iniciar Sesión</button>
                    ) : (
                        <button onClick={handleLogoutClick} className="LogoutButtonLink">
                            <img src={logoutIcon} alt="Logout" className="LogoutIcon" />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
