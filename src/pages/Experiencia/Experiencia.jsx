import React from 'react';
import './Experiencia.css';
import experiancia from '../../contents/experiencia';
import CardConteudo from '../../components/CardConteudo';

const Experiencia = () => {
    
    return (
        <>
            <div className="row">
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