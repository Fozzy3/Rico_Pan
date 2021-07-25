import {React , Fragment} from 'react';
import imagenes from '../../assets/images.jsx';
import './NavBar.css';

export  function Navbar() {
    return (
        <Fragment>
            <nav>
                <div className="logo">
                        <h4>Rico Pan</h4>
                        <img src={imagenes.pan} alt="" />
                </div>
                <div className="navegacion">
                        <a href="#">Quienes Somos?</a>
                        <a href="#">Productos</a>
                        <a href="#">Servicios</a>
                </div>
            </nav>
        </Fragment>
    )
}
