import React from 'react';
import DadosPessoais from '../DadosPessoais';
import './BannerTopo.css';
import { ContextPaginas } from '../../PaginasContext';

const BannetTopo = () => {

    const { CONT_HOME } = React.useContext(ContextPaginas);

    return (
        <article className="row pt-3">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-2">{CONT_HOME.nomePrincipal}</h1>
                    </div>
                    <div className="col-sm-12">
                        <DadosPessoais dados={CONT_HOME.dadosPessoais} />
                    </div>
                    <div className="col-sm-12 my-3 ">
                        <a className="links" href="#contato"><button className="btn btn-primary">{CONT_HOME.labelBotao}</button></a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BannetTopo;