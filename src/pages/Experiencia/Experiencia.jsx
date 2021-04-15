import React from 'react';
import './Experiencia.css';
import experiancia from '../../contents/experiencia';
import CardConteudo from '../../components/CardConteudo';

const Experiencia = () => {
    let documentoTop = window.document.scrollingElement.scrollTop;
    if (documentoTop === 0) {
        window.scroll(0, 1);
    } else {
        window.scroll(0, 0);
    }
    return (
        <>
            <div className="row anime">
                <div className="col-sm-12 py-3  ">
                </div>
                {
                    experiancia.map((elemento) => {
                        return (
                            <div className="col-sm-12 col-lg-6" key={elemento.id}>
                                <CardConteudo {...elemento} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Experiencia;