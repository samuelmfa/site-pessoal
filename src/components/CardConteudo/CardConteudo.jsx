import React from 'react';

const CardConteudo = ({ link, titulo, subtitulo, paragrafo, imagem }) => {
    return (
        <article className="card border border-primary shadow my-3">
            <div className="text-center p-1">
                <img className="imagem card-img-top w-50  " src={imagem} alt="..." />
            </div>
            <div className="card-header text-center border-0 ">
                <h5 className="text-primary">{subtitulo}<br/> {paragrafo}</h5>
            </div>
            <div className="card-body text-center border-0 ">
                <p className="paragrafo card-title">{titulo}</p>
            </div>
            {link &&
                <div className="card-footer text-center border-0">
                    <button className="btn btn-primary">site</button>
                </div>
            }

        </article>
    );
};

export default CardConteudo;