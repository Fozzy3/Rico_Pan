import React, {Fragment} from 'react'
import imagenes from '../../assets/images.jsx';

export function Quienes() {
    return (
        <Fragment>
            <h2>¿Quienes Somos?</h2>
            <div className="presentacion">
                <img src={imagenes.panadero} alt="Panadero" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ducimus! Aliquid sit architecto voluptate nostrum omnis veritatis vero, temporibus voluptatibus cumque atque dicta aspernatur dolor tenetur, expedita obcaecati illo labore?</p>
            </div>

        </Fragment>
    )
}
