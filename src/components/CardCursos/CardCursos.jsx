import React from 'react';
import './CardCursos.css'

const CardCursos = ({ titulo, credencial, imagem }) => {
    return (
        <div className="card border border-primary shadow my-3">
            <div className="text-center">
                <img className="imagem card-img-top p-2 w-25 card-img" src={imagem} alt="minha imagem" />
            </div>
            <div className="card-header text-center border-0 ">
                <h4 className="text-primary">{titulo}</h4>
            </div>           
            <div className="card-footer text-center border-0">
                <a className="links" href={credencial}>
                    <button className="btn btn-primary">Credencial</button>
                </a>
            </div>
        </div>
    );
};

export default CardCursos;