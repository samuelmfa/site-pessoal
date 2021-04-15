import React from 'react';
import './Footer.css';
import { ContextPaginas } from '../../PaginasContext';

const Footer = () => {

    const { CONT_FOOTER, CONT_HEADER } = React.useContext(ContextPaginas);

    return (
        <article className="bg-dark mt-2">
            <section className="container text-white">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-end my-3 box-icones">
                            <a href="https://www.linkedin.com/in/samuel-pereira-costa-43858978/">
                                <i className="bi bi-linkedin box-icones-style mx-3"></i>
                            </a>
                            <a href="https://github.com/samuelmfa">
                                <i className="bi bi-github box-icones-style mx-3"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 my-2">

                        <h5>Pensamentos...</h5>
                        <p className="paragrafo">
                            <em>
                                {CONT_FOOTER.pensamentos}
                            </em>
                        </p>

                    </div>
                    <div className="col-sm-12 col-lg-4 my-2">
                        <div>
                            <h5>Mapa do Site</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item paragrafo"><a className="links" href="/">{CONT_HEADER.home}</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/formacao">{CONT_HEADER.formacao}</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/cursos">{CONT_HEADER.cursos}</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/experiencia">{CONT_HEADER.experiencia}</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/contato">{CONT_HEADER.contato}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 my-2">
                        <div>
                            <h5>Sites que Recomendo</h5>
                            <ul className="list-group list-group-flush">
                                {CONT_FOOTER && CONT_FOOTER.links.map((elemento, index) => {
                                    return (
                                        <li className="list-group-item paragrafo" key={index}>
                                            <a className="links" href={elemento.link}>{elemento.titulo}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </article>
    );
};

export default Footer;