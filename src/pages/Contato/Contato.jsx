import React from 'react';
import FormularioContato from '../../components/FormularioContato/FormularioContato';
import './Contato.css';
import email from '../../assets/img/email.jpg';
import { ContextPaginas } from '../../PaginasContext';

const Contato = () => {
    const { CONT_CONTATO } = React.useContext(ContextPaginas);
    return (

        <div className="row mt-5">
            <div className="col-sm-12 col-lg-6 my-5 text-center ">
                <img src={email} alt="..." />
                <br />
                   email: <a href={`mailto:${CONT_CONTATO.emailContato}`}>{CONT_CONTATO.emailContato}</a>
            </div>
            <div className="col-sm-12 col-lg-6">
                <FormularioContato />
            </div>
        </div >

    );
};

export default Contato;