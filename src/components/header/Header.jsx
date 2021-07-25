import {React, Fragment} from 'react';
import imagenes from '../../assets/images.jsx';
import  './Header.css';

export function Header(){
    return (
        <Fragment>
            <h1 className="titulo-principal">Recien<br/>salido del<br/>horno</h1>
            <img className="imagen" src={imagenes.img1} alt="" />
        </Fragment>
    )
}