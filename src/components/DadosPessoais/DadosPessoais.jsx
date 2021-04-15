import React from 'react';
import './DadosPessoais.css'

const DadosPessoais = ({ dados }) => {
    const { titulo, subtitulo, conteudo } = dados;
    return (
        <section>
            <h4 className="subtitulo text-primary mb-3">{titulo}</h4>
            <h5 className="subtitulo mt-3">{subtitulo}</h5>
            <p className="paragrafo-citacao text-justify">"{conteudo}"</p>
        </section>
    );
};

export default DadosPessoais;