import React from 'react';
import FormularioContato from '../../components/FormularioContato/FormularioContato';
import './Contato.css';
import email from '../../assets/img/email.jpg'

const Contato = () => {
    let documentoTop = window.document.scrollingElement.scrollTop;
    if (documentoTop === 0) {
        window.scroll(0, 1);
    } else {
        window.scroll(0, 0);
    }
    return (

        <div className="row mt-5 anime">
            <div className="col-sm-12 col-lg-6 my-5 text-center ">
                <img src={email} alt="..." />
                <br />
                   email: <a href="mailto:samuelmfa@gmail.com">samuelmfa@gmail.com</a>
            </div>
            <div className="col-sm-12 col-lg-6">
                <FormularioContato />
            </div>
        </div>

    );
};

export default Contato;