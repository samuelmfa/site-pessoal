import React from 'react';
import DadosPessoais from '../DadosPessoais';
import './BannerTopo.css'

const BannetTopo = () => {
    return (
        <article className="row pt-3">
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-2">Samuel Pereira Costa</h1>
                    </div>
                    <div className="col-sm-12">
                        <DadosPessoais />
                    </div>
                    <div className="col-sm-12 my-3 ">
                       <a className="links" href="#contato"><button className="btn btn-primary">Entrar em Contato</button></a> 
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BannetTopo;