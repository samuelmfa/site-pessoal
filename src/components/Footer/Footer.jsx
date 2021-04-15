import React from 'react';
import './Footer.css';

const Footer = () => {
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
                                "Acredito em crescimento e aprendizado contínuo nessa profissão.<br />
                                Na área de desenvolvimento de software sempre surgem muitos desafios
                                devido as rápidas mudanças, o mundo da tecnologia  é impulsionado
                               pelas necessidades do mercado e dos clientes."
                            </em>
                        </p>

                    </div>
                    <div className="col-sm-12 col-lg-4 my-2">
                        <div>
                            <h5>Mapa do Site</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item paragrafo"><a className="links" href="/">Home</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/formacao">Formação</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/cursos">Cursos</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/experiencia">Experiência</a></li>
                                <li className="list-group-item paragrafo"><a className="links" href="/contato">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 my-2">
                        <div>
                            <h5>Sites que Recomendo</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item paragrafo">
                                    <a className="links" href="https://www.alura.com.br/">Alura</a>
                                </li>
                                <li className="list-group-item paragrafo">
                                    <a className="links" href="https://pt-br.reactjs.org/">React</a>
                                </li>
                                <li className="list-group-item paragrafo">
                                    <a className="links" href="https://angular.io/">Angular</a>
                                </li>  
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </article>
    );
};

export default Footer;