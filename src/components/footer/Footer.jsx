import React, { Fragment} from 'react'
import imagenes from "../../assets/images.jsx";
import "./Footer.css";

export function Footer() {
    return (
        <Fragment>
            <div className="texto_footer">
                <ul>
                    <li><spam>Correo: </spam>correo@gmail.com</li>
                    <li><spam>Tel: </spam>123456789</li>
                    <li><spam>Direccion: </spam>Av 12 # 34-96</li>
                </ul>
            </div>
            <div className="logo_footer">
                <h4>Rico Pan</h4>
                <img src={imagenes.pan} alt="" />
            </div>
            <div className="maps">
                <img src={imagenes.maps} alt="" />
            </div>


        </Fragment>
    )
}
