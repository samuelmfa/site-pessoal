import React from 'react';
import BannerTopo from '../../components/BannerTopo';
import BoxFoto from '../../components/BoxFoto';
import './Home.css'
import Formacao from '../Formacao/Formacao';
import Cursos from '../Cursos/Cursos';
import Experiencia from '../Experiencia/Experiencia';
import Contato from '../Contato/Contato';

const Home = () => {
    React.useEffect(() => {
        let documentoTop = window.document.scrollingElement.scrollTop;
        if (documentoTop === 0) {
            window.scroll(0, 2);
        } else {
            window.scroll(0, 3);
        }
    }, [])


    return (
        <>
            <div className="row my-5">
                <div className="col-sm-6 anime">
                    <BoxFoto />
                </div>
                <div className="col-sm-6 anime">
                    <BannerTopo />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 my-3 anime">
                    <div className="bg-dark px-2 py-3 borda">
                        <h3 className="text-white">Formação</h3>
                    </div>
                    <Formacao />
                </div>
                <div className="col-sm-12 my-3 anime">
                    <div className="bg-dark px-2 py-3 borda">
                        <h3 className="text-white">Cursos</h3>
                    </div>
                    <Cursos />
                </div>
                <div className="col-sm-12 my-3 anime">
                    <div className="bg-dark px-2 py-3 borda">
                        <h3 className="text-white">Experiência Profissional</h3>
                    </div>
                    <Experiencia />
                </div>
                <div id="contato" className="col-sm-12 my-3 anime">
                    <div className="bg-dark px-2 py-3 borda">
                        <h3 className="text-white">Contato</h3>
                    </div>
                    <Contato />
                    <div id="contato" className="my-3 ">
                        <a href="#topo" className="links btn btn-primary" >Topo<i className="bi bi-arrow-up"></i> </a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;