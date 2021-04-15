import React from 'react';
import './Cursos.css';
import cursos from '../../contents/cursos';
import CardCursos from '../../components/CardCursos';

const Cursos = () => {
    let documentoTop = window.document.scrollingElement.scrollTop;
    if (documentoTop === 0) {
        window.scroll(0, 1);
    } else {
        window.scroll(0, 0);
    }
    return (
        <>
            <div className="row anime">
                <div className="col-sm-12 py-3 ">
                </div>
                {
                    cursos.map((elemento) => {
                        return (
                            <div className="col-sm-12 col-lg-6" key={elemento.id}>
                                <CardCursos {...elemento} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Cursos;