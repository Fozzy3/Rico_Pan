import React, { Fragment } from "react";
import imagenes from "../../assets/images.jsx";
import "./Quienes.css";

export function Quienes() {
  return (
    <Fragment>
      <div className="quienes">
        <h2>¿Quienes Somos?</h2>
        <div className="presentacion">
          <img src={imagenes.panadero} alt="Panadero" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            ducimus! Aliquid sit architecto voluptate nostrum omnis veritatis
            vero, temporibus voluptatibus cumque atque dicta aspernatur dolor
            tenetur, expedita obcaecati illo labore?
          </p>
        </div>
      </div>
      <div className="logos">
        <img className="logo" src={imagenes.l1} alt="Panaderia_Logo" />
        <img className="logo" src={imagenes.l2} alt="Panaderia_Logo" />
        <img className="logo" src={imagenes.l3} alt="Panaderia_Logo" />
        <img className="logo" src={imagenes.l4} alt="Panaderia_Logo" />
        <img className="logo" src={imagenes.l5} alt="Panaderia_Logo" />
      </div>
      <img className="medium" src={imagenes.medium} alt="" />
      <div className="servicios">
        <img src={imagenes.productos} alt="Productos" />
        <div className="texto">
          <h3>
            <span>P</span>roductos
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            ullam praesentium dolorum reiciendis eum beatae adipisci sequi ut
            explicabo, quaerat ducimus aperiam veniam totam assumenda iure
            accusamus fugit esse minima!
          </p>
        </div>
        <div className="texto">
          <h3>
            <span>S</span>ervicios
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            ullam praesentium dolorum reiciendis eum beatae adipisci sequi ut
            explicabo, quaerat ducimus aperiam veniam totam assumenda iure
            accusamus fugit esse minima!
          </p>
        </div>
        <img src={imagenes.servicios} alt="Servicios" />
      </div>
    </Fragment>
  );
}
