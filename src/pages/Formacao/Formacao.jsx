import React from 'react';
import './Formacao.css';
import formacao from '../../contents/formacao';
import CardConteudo from '../../components/CardConteudo';

const Formacao = () => {
      
    return (
        <article id="formacao" className="row mt-5">
            {formacao.map((elemento) => {
                return (
                    <section className="col-sm-12 col-lg-6 " key={elemento.id}>
                        <CardConteudo {...elemento} />
                    </section>
                );
            })}
        </article>
    );
};

export default Formacao;